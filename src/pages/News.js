import React from 'react';
import Navbar from '../components/Navbar';
import DetailNews from '../components/News';

class News extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <DetailNews />
            </React.Fragment>
        )
    }
}

export default News;