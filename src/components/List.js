import React from 'react';
import { withRouter } from "react-router-dom";

class ListArticle extends React.Component {
    state = {
        data: [],
        fetch: false
    }
    async componentDidMount(){
        const response = await fetch('http://128.199.80.245:8080/content');
        const json = await response.json();
        this.setState({
            data: json.data,
            fetch: true
        })
    }

    render() {
        const { data, fetch } = this.state;
        if(fetch) {
            if(fetch.status == 'failed'){
                return (<div>something wrong</div>)
            } else {
                return (
                    <div>
                        {data.map((v,i) => (
                            <div style={{padding: "3em", marginTop: i == 0 ? '0%' : '5%' }}>
                                <div style={{border: "none", width: "90%", height: "200px", display: "flex", justifyContent: "center"}}>
                                    <img 
                                        src={v.img}
                                        style={{width: "30%"}}/>
                                    <div style={{width: "70%", padding: "10px"}}>
                                        <div>
                                            <span onClick={() => this.props.history.push(`/news/${v._id}`)} style={{fontSize: "25px"}}>{v.title}</span>
                                        </div>
                                        <small style={{color: 'grey'}}>{v.content}</small>
                                        <div style={{marginTop: "2em"}}>
                                            <small>27 July 2019</small>
                                        </div>
                                        <div>
                                            <small>author: {v.author[0].name}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            }
        } else {
            return (<div>loading....</div>)
        }
        
        
    }
}

export default withRouter(ListArticle);