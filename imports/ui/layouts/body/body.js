import React from 'react';
import Head from '../head/head';
import Footer from '../footer/footer';
class Body extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="root" className="no-js" lang="en">
            <Head title={this.props.title}></Head>
                {this.props.main}
            <Footer/>
            </div>
        )
    }
}

export default Body;
