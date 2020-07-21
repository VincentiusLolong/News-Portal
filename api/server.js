const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
const db = require('./config/db');
const UserSchema = require('./module/auth/model');
const ContentSchema = require('./module/content/model');
const _ = require('lodash');
const jwt = require('jsonwebtoken')

const data = [
    {
        username: 'vincent',
        pass: 'admin1234',
        token: 'adsader2214sad',
    },
    {
        username: 'fraska',
        pass: 'admin',
        token: 'adsader2214sad',
    },
    {
        username: 'ari',
        pass: 'admin',
        token: 'adsader2214sad',
    },
    {
        username: 'izhar',
        pass: 'admin',
        token: 'adsader2214sad', 
    }
]

const author = {
    id: '',
    name: '',
    username: '',
    password: ''
}

const news = {
    title: '__',
    author: 'id',
    tag: '',
    img: '',
    content: '',
    createAt: ''
}

const uuidv4 = (code) => {
    return code.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
};
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res, next) => {
    res.send(data);
})

app.get('/auth', (req, res, next) => {
    const username = req.query.username;
    const pass = req.query.password;
    console.log(username, pass)

    if(username || pass){

        UserSchema.find({ email: username, password: pass }, (err, arr) => {
            console.log(arr)
            if(err) return res.send({ status: "failed authentication"});
            if(_.isEmpty(arr)) return res.send({ status: "user not found"});
            const tokenJwt = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: arr[0]                
            }, 'news-jwt');
            // res.send({ status: 'ok', token: uuidv4(arr[0]._id.toString()) })
            res.send({ status: 'ok', token: tokenJwt })
        });
    }
    else {
        res.send({
            status: 'should contain username and password'
        })
    }
})

app.get('/auth/user', (req, res, next) => {
    const username = req.query.username;
    const password = req.query.password;
    const name = req.query.name;

    if(username || password || name){
        console.log('regis : ',{
            email: username,
            name: username.split()[0],
            password,
            token: Math.random().toString(36).substring(7)
        });
        UserSchema.create({
            email: username,
            name: username.split()[0],
            password,
            token: Math.random().toString(36).substring(7)
        }, (err, docs) => {
            if(err) return res.send({ status: 'failed create user', err });
            console.log('data : ', docs);
            res.send({
                status:'ok',
                data: docs,
            })
        });
    } else {
        res.send({
            status: "should be coontain username, name and password"
        })
    }
    
})

app.get('/content/:id', (req, res, next) => {
    console.log(req.params.id);
    ContentSchema.findOne({_id: req.params.id}, (err, docs) => {
        if(err) return res.send({data: [],status: 'failed'+err })
        res.send({data: docs, status: "ok" });
    })
})
app.get('/content', (req, res, next) => {
    ContentSchema.find({}).populate('author').exec((err, content) => {
        res.send({ data: content });
    })
});

app.get('/delete/content/:id', (req, res, next) => {
    const id = req.params.id
    ContentSchema.findByIdAndRemove(id, (err, docs) => {
        if(err) return res.send({ status: 'failed'})
        res.send({ ...docs, status: 'ok' });
    })
})

app.post('/content', (req,res,next) => {
    console.log(req.body)
    const decode = jwt.verify(req.body.author|| 'test', 'news-jwt');
    console.log('decode : ', decode);
    const data = {
        title: req.body.title,
        author: decode.data._id,
        tag: req.body.tag,
        content: req.body.content,
        img: req.body.image,
    }

    ContentSchema.insertMany([data]).then((resp) => {
        res.send(resp)
    }).catch((er) => {
        console.log(er);
    })
})

app.post('/content/edit', (req, res, next) => {
    const idx = req.body.id;
    const decode = jwt.verify(req.body.author|| 'test', 'news-jwt');

    const payload = {
        title: req.body.title,
        author: decode.data._id,
        tag: req.body.tag,
        content: req.body.content,
        img: req.body.image,
    }
    ContentSchema.updateOne({ _id: idx }, { $set: payload }, (err, resp) => {
        if(!err) res.send(resp);
        else res.send(err)
    })
})
app.listen(8080, (err) => {
    console.log('service running port ', 8080);
})