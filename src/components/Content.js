import React from 'react';
import { withRouter } from "react-router-dom";

class ListContent extends React.Component {
    state = {
        data: [],
        fetch: false,
        title: '',
        tag: '',
        image: '',
        content: ''
    }

    async componentDidMount(){
        const response = await fetch('http://128.199.80.245:8080/content');
        const json = await response.json();
        this.setState({
            data: json.data,
            fetch: true
        })
    }

    deleteData = async (id) => {
        const response = await fetch('http://128.199.80.245:8080/delete/content/'+id);
        const json = await response.json();
        window.location.reload();
        alert(json, 'success');
    }

    render() {
        const { data, fetch } = this.state;

        if(fetch) {
            if(fetch.status == 'failed'){
                return (<div>something wrong</div>)
            } else {
                return (
                    <div> 
                        <div 
                            style={{
                                fontSize: "25px", 
                                color: "#3DCCF7",
                                fontWeight: "bold"}}>
                                My Story
                        </div>
                        <br/>
                        {data.map((v,i) => (
                            <div style={{padding: "3em", width: "80%", marginTop: i == 0 ? '0%' : '7%'}}>
                                <div style={{border: "none", height: "200px", display: "flex", justifyContent: "center"}}>
                                    <img 
                                        src={v.img} 
                                        style={{width: "30%"}}/>
                                    <div style={{width: "65%", padding: "10px"}}>
                                        <div style={{fontSize: "25px"}}>{v.title}</div>
                                        <small style={{color: "grey"}}>{v.content}
                                        </small>
                                        <div style={{marginTop: "2em"}}>
                                            <small>27 July 2019</small>
                                        </div>
                                        <div>
                                            <small>author: {v.author[0].name}</small>
                                        </div>
                                    </div>
                                    <div style={{width: "5%"}}>
                                        <div style={{border: "none", borderRadius: "50%", fontSize: "20px"}} onClick={() => {
                                            this.props.history.push(`/dashboard?id=${v._id}`)
                                        }}>
                                            <i style={{width: "40px", height: "40px"}} className="fas fa-edit"></i>
                                        </div>
                                        <div style={{border: "none", borderRadius: "50%", fontSize: "20px"}}>
                                            <i style={{width: "40px", height: "40px"}} className="fas fa-trash-alt" onClick={() => {
                                                this.deleteData(v._id);
                                            }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        } else {
            return (<div>loading....</div>)
        }
    }
};

export default withRouter(ListContent);