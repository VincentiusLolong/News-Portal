import React from 'react';
import Cookies from 'universal-cookie';
import { withRouter } from "react-router-dom";
import qs from 'querystring';

class FormArticle extends React.Component {
    state = {
        data: [],
        fetch: false,
        title: '',
        tag: '',
        image: '',
        content: '',
        isEdit: false,
        isLoading: false,
        idEdit: ''
    }

    async componentDidMount(){
        const { location } = this.props;
        const query = qs.parse(location.search)
        const id = query['?id'] || '';
        this.setState({ isLoading: true })
        const data = await this.getDetailContent(id);
        if (id) this.setState({
            idEdit: id,
            isEdit: true,
            title: data.title || '',
            tag: data.tag || '',
            image: data.img || '',
            content: data.content || '',
            isLoading: false,
        })
    }

    getDetailContent = async (id) => {
        const response = await fetch(`http://localhost:8080/content/${id}`);
        const json = await response.json();
        
        return json.data;
    }

    onChange(e){
        console.log({
            [e.target.name]: e.target.value
        })
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = () => {
        const { title, tag, image, content, isEdit, idEdit } = this.state;
        const cHandler = new Cookies();
        const token = cHandler.get('tk') || ''

        const endpoint = isEdit ? '/content/edit' : '/content'
        const payload = {
            title, tag, image, content, author: token
        }
        fetch(`http://localhost:8080${endpoint}`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                ...payload,
                id: idEdit
            })  
        }).then((res)=>{
            alert('Success Submit content')
            if (isEdit) this.props.history.push('/dashboard-list')
        })
    }

    render() {
        const { data, fetch, isLoading } = this.state;
        // if (isLoading) return <div>Loading...</div>
        return (
            <div style={{width: '95%', padding: '3em 0em 3em 7em'}} > 
                <div 
                    style={{
                        fontSize: "25px", 
                        color: "#3DCCF7",
                        fontWeight: "bold"
                    }}>
                        Form block content
                </div>
                <br/>
                <div style={{width: "70%"}}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">
                                Title
                            </span>
                        </div>
                        <input value={this.state.title} type="text" name="title" className="form-control" onChange={this.onChange.bind(this)}/>
                    </div>
                    <div className="input-group" style={{ marginTop: "2em"}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">
                                Tag
                            </span>
                        </div>
                        <input value={this.state.tag} type="text" name="tag" className="form-control" onChange={this.onChange.bind(this)}/>
                    </div>
                    <div className="input-group" style={{ marginTop: "2em"}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">
                                Image
                            </span>
                        </div>
                        <input value={this.state.image} type="text" name="image" className="form-control" onChange={this.onChange.bind(this)}/>
                    </div>
                    <div className="form-group" style={{ marginTop: "2em"}}>
                        <label for="exampleFormControlTextarea1">Content</label>
                        <textarea value={this.state.content} name="content" onChange={this.onChange.bind(this)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button
                        style={{
                            border: "none",
                            borderRadius: "10px", 
                            backgroundColor: "#3DCCF7", 
                            color: "white", 
                            padding: "15px 40px", 
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px"}}   
                        onClick={() => {
                            this.onSubmit();
                        }}  
                        type="submit">Submit</button>
                </div>
            </div>
        )
        
    }
};

export default withRouter(FormArticle);