import React from 'react';
import Script from 'react-script-tag';

class Head extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <header>
                    {/* <!--- basic page needs
                    ================================================== --> */}
                    <meta charSet="utf-8"/>
                    <title> {this.props.title} </title>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>

                    {/* <!-- mobile specific metas
                    ================================================== --> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    {/* <!-- CSS
                    ================================================== --> */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>

                    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'/>

                    <link rel="stylesheet" href="css/style.css"/>

            </header>
        )
    }
}

export default Head;