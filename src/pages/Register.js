import React from 'react';
import { withRouter } from "react-router-dom";

class Register extends React.Component {

    state = {
        email: '',
        password: ''
    }

    onRegister = async () => {
        const { email, password } = this.state;
        console.log(this.state);

        const response = await fetch(`http://localhost:8080/auth/user?username=${email}&password=${password}`);
        const data = response.json();

        if (data) {
            alert('Success Register, it will be redirect to sign-in page')
            this.props.history.push('/account');
        }
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', height: '100vh'}}>
                <img src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GbbtDTW/zoom-in-on-los-angeles-skyline-at-sunset-with-storm-clouds-passing-in-background-and-lone-tree-silhouette-in-foreground-view-from-hollywood-hills-4k-uhd-timelapse_rrzgqywaf_thumbnail-full05.png" style={{width: '70%'}} />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '30%'}}>
                <div className="form-group" style={{width: '70%'}}>
                    <div style={{fontSize: '40px', fontFamily: 'Roboto Black'}}>InfoTech</div>
                    <br />
                    <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id>
                        <i className="far fa-user" />
                        </span>
                    </div>
                    <input type="text" name="username" id="username" className="form-control" onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <br />
                    <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id>
                        <i className="fas fa-lock" />
                        </span>
                    </div>
                    <input type="text" name="password" id="password" className="form-control" onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button style={{border: 'none', borderRadius: '10px', backgroundColor: '#3DCCF7', color: 'white', padding: '15px 40px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px'}} name="register" onClick={this.onRegister}>
                        Register
                    </button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);