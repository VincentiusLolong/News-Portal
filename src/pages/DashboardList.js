import React from 'react';
import ListContent from '../components/Content';
import SideBar from '../components/Sidebar';

class DashboardList extends React.Component {
    render(){
        return(
            <React.Fragment>
                <SideBar />
                <div style={{width: '95%', padding: '3em 0em 3em 7em'}}> 
                    <ListContent />
                </div>
            </React.Fragment>
        )
    }
}

export default DashboardList;