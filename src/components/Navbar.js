import React from 'react';
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" onClick={() => this.props.history.push('/')}>Infotech</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <div class="nav-link" onClick={() => this.props.history.push('/')}>Home <span class="sr-only">(current)</span></div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => this.props.history.push('/about')}>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);