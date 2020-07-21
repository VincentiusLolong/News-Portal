import React from 'react';
import { withRouter } from "react-router-dom";
import qs from 'querystring';

class DetailNews extends React.Component {
    state = {
        data: {},
        fetch: false
    }
    async componentDidMount(){
        const { location, history } = this.props;

        const idNews =  location.pathname.split('news/');
        const response = await fetch(`http://localhost:8080/content/${idNews[1]}`);
        const json = await response.json();
        
        this.setState({
            data: json.data,
            fetch: true
        })
    }

    render() {
        const { data, fetch } = this.state;
        console.log('test',data);
        if(fetch) {
                return (
                    <div style={{padding: "3em 15em"}}>
                        <img 
                            src={data.img}
                            style={{width: "100%", height: "500px"}}/>
                        <div style={{margin: "3em 0em", padding: "2em"}}>
                            <div>
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                            </div>
                            <div style={{marginTop: "7em"}}>
                                <div className="form-group" style={{marginTop: "2em"}}>
                                    <label for="exampleFormControlTextarea1">Comment</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button style={{float: "right"}} className="btn btn-primary">Submit</button>
                            </div>
                            <div style={{marginTop: "5em"}}>
                                <div style={{display: "flex", marginTop: "2em"}}>
                                    <img 
                                        src="https://image.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background-perspective-brown-wood-table-blur-city-building-view-background-can-be-used-mock-up-montage-products-display-design-key-visual-layout_1253-951.jpg" 
                                        style={{width: "50px", height: "50px", border: "none", borderRadius: "50%"}}/>
                                    <div style={{marginLeft: "1em"}}>
                                        <div>Vincent</div>
                                        <small>Hello darker my friend</small>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "2em"}}>
                                    <img 
                                        src="https://image.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background-perspective-brown-wood-table-blur-city-building-view-background-can-be-used-mock-up-montage-products-display-design-key-visual-layout_1253-951.jpg" 
                                        style={{width: "50px", height: "50px", border: "none", borderRadius: "50%"}}/>
                                    <div style={{marginLeft: "1em"}}>
                                        <div>Vincent</div>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</small>
                                    </div>
                                </div>
                                <div style={{display: "flex", marginTop: "2em"}}>
                                    <img 
                                        src="https://image.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background-perspective-brown-wood-table-blur-city-building-view-background-can-be-used-mock-up-montage-products-display-design-key-visual-layout_1253-951.jpg" 
                                        style={{width: "50px", height: "50px", border: "none", borderRadius: "50%"}}/>
                                    <div style={{marginLeft: "1em"}}>
                                        <div>Vincent</div>
                                        <small>Hello darker my friend</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        } else {
            return (<div>loading....</div>)
        }
        
        // if(!this.state.data){
        //     return (<div>loading...</div>)      
        // } else {
            
        // }
        
    }
}

export default withRouter(DetailNews);