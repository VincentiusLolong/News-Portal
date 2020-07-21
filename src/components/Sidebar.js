import React from 'react';
import Cookies from 'universal-cookie';
import { withRouter } from "react-router-dom";

class Sidebar extends React.Component {
    goToMenu = target => {
        console.log('test : ', target)
        this.props.history.push(target)
    }

    doLogOut = () => {
        const cHandler = new Cookies();
        cHandler.remove('tk', { path: '/' });         // remove token

        this.props.history.push('/account');

    }
    render() {
        return (
            <div style={{width: '5%', position: 'fixed', border: '1px solid #C5CACC', backgroundColor: '#ffffff', height: '100vh', justifyContent: 'center', display: 'flex'}}> 
                <div>
                    <div style={{margin: '2em 0em'}}>
                        <i style={{fontSize: '30px', color: '#97E2F8'}} className="fas fa-home" />
                    </div>
                    <div style={{margin: '4em 0em 1em 0em', border: '1px 0px 0px 0px solid #C5CACC'}}>
                        <div style={{margin: '2em 0em'}} onClick={() => this.goToMenu('/dashboard')}>
                            <div><i style={{fontSize: '30px', color: '#97E2F8'}} className="fas fa-list-alt" /></div>
                        </div>
                        <div style={{margin: '2em 0em'}} onClick={() => this.goToMenu('/dashboard-list')}>
                            <div><i style={{fontSize: '30px', color: '#97E2F8'}} className="fas fa-pen-square" /></div>
                        </div>
                        <div style={{margin: '2em 0em'}} onClick={() => this.doLogOut()}>
                            <div><i style={{fontSize: '30px', color: '#97E2F8'}} className="fas fa-sign-out-alt" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Sidebar);