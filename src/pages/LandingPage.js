import React, { Fragment } from 'react';
import ListArticle from '../components/List';
import Navbar from '../components/Navbar';

class landingPage extends React.Component {
    render(){
        return (
            <Fragment>
                <Navbar />
                <div style={{ display: 'flex'}}>
                    
                    <div style={{ width: '70%'}} id="content">
                        <ListArticle />
                    </div>
                    <div style={{ width: '30%'}}>
                        <div style={{ padding: '3em 0em%'}}>
                            <div style={{ margin: 0, paddingTop: '1em'}}>
                            <div><h4>New Post</h4></div>
                                <div style={{
                                    border: 'none',
                                    marginTop: '1.5em',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <img 
                                        alt="test"
                                        src="https://image.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background-perspective-brown-wood-table-blur-city-building-view-background-can-be-used-mock-up-montage-products-display-design-key-visual-layout_1253-951.jpg" 
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            border: 'none',
                                            borderRadius: '50%'
                                        }}/>
                                    <div style={{ padding: '0em 1em' }}>
                                        <div style={{ fontSize: '17px' }}>that why this game is harrom</div>
                                        <small>lorem ad gip sum</small>
                                    </div>
                                </div>
                                <div style={{"border":"none","marginTop":"1.5em","display":"flex","justifyContent":"center"}}>
                                    <img 
                                        alt="test"
                                        src="https://image.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background-perspective-brown-wood-table-blur-city-building-view-background-can-be-used-mock-up-montage-products-display-design-key-visual-layout_1253-951.jpg" 
                                        style={{"width":"50px","height":"50px","border":"none","borderRadius":"50%"}}/>
                                    <div style={{ padding: '0em 1em'}}>
                                        <div style={{ fontSize: '17px' }}>that why this game is harrom</div>
                                        <small>lorem ad gip sum</small>
                                    </div>
                                </div>
                                <div style={{"border":"none","marginTop":"1.5em","display":"flex","justifyContent":"center"}}>
                                    <img 
                                        src="https://image.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background-perspective-brown-wood-table-blur-city-building-view-background-can-be-used-mock-up-montage-products-display-design-key-visual-layout_1253-951.jpg" 
                                        style={{"width":"50px","height":"50px","border":"none","borderRadius":"50%"}}/>
                                    <div style={{ padding: '0em 1em'}}>
                                        <div style={{ fontSize: '17px' }}>that why this game is harrom</div>
                                        <small>lorem ad gip sum</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default landingPage;