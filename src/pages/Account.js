import React from 'react';
import Cookies from 'universal-cookie';
import history from '../libs/history';
import { withRouter } from "react-router-dom";

class Account extends React.Component{
    state = {
        em: '',
        pwd: ''
    }
    SignIn = async (expired = 32000) => {
        const cHandler = new Cookies();
        const expires = new Date(new Date().getTime() + (parseInt(expired) * 60 * 1000));
        console.log('state ', this.state);

        const response = await fetch(`http://localhost:8080/auth?username=${this.state.em}&password=${this.state.pwd}`);
        const json = await response.json();

        cHandler.set('tk', json.token, { expires, path: '/' });         // token

        this.props.history.push('/dashboard')
        
    }
    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'center', height: '100vh'}}>
                 <img src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GbbtDTW/zoom-in-on-los-angeles-skyline-at-sunset-with-storm-clouds-passing-in-background-and-lone-tree-silhouette-in-foreground-view-from-hollywood-hills-4k-uhd-timelapse_rrzgqywaf_thumbnail-full05.png" style={{width: '70%'}} />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '30%'}}>
                <div style={{width: '70%'}} className="form-group">
                    <div style={{fontSize: '40px', fontFamily: 'Roboto Black'}}>InfoTech</div>
                    <br />
                    <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id>
                        <i className="far fa-user" />
                        </span>
                    </div>
                    <input type="text" name="username" id="username" className="form-control" onChange={(e) => this.setState({ em: e.target.value })} />
                    </div>
                    <br />
                    <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id>
                        <i className="fas fa-lock" />
                        </span>
                    </div>
                    <input type="text" name="password" id="password" className="form-control" onChange={(e) => this.setState({ pwd: e.target.value })} />
                    </div>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button
                        onClick={this.SignIn}
                        style={{border: 'none', borderRadius: '10px', backgroundColor: '#3DCCF7', color: 'white', padding: '15px 40px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px'}}>
                        Sign In
                    </button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Account);