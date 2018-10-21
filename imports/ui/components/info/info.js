import React from 'react';
import { Meteor } from 'meteor/meteor';
class Infor extends React.Component{
    constructor(props) {
        super(props);
    }
    Del(e)
    {
        e.preventDefault();
        console.log(e.target.innerHTML);
        let inner = e.target.innerHTML;
        Meteor.call('links.remove',e.target.id,function(err){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Remove ",inner,"complete !");
            }
        })
    }
    render(){
        console.log(this.props);
        return(
            <div name="info">
                    {
                    <For each="item" index="i" of={ this.props.items }>
                        <li key={ i }><a id={item._id} href={ item.url } target="_blank" onClick={this.Del}>{ item.title }</a></li>
                    </For>
                    }
            </div>
        )
    }
}

export default Infor;
