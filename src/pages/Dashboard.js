import React from 'react';
import FormArticle from '../components/Form';
import SideBar from '../components/Sidebar';

class Dashboard extends React.Component{
    render(){
        return(
            <React.Fragment>
                <SideBar />
                <FormArticle />
            </React.Fragment>
        )
    }
}

export default Dashboard;