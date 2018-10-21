import React from 'react';
import { Meteor } from 'meteor/meteor';

class Hello extends React.Component{
  constructor(props) {
    super(props);
    this.state={'counter':0};
    this.ClickEvent=this.ClickEvent.bind(this);
    this.onLoad=this.onLoad.bind(this);
  }
  ClickEvent(e){
    e.preventDefault();
    this.setState({'counter':this.state.counter+1});
  }
  onLoad(){
    this.setState({'counter':10});
  }
  onSubmit(e)
  {
    e.preventDefault();
    const link={
      url: e.target.url.value,
      title: e.target.title.value
    };
    console.log(link);
    Meteor.call('links.insert',link,function(err){
      if(err)
      {
        console.log(err);
      }
      else
      {
        console.log("Saved !");
      }
    })
  }
  render(){
    return(
      <div id="hello" onLoad={this.onLoad}>
        <button onClick={this.ClickEvent}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
        <h2>Learn Meteor!</h2>
        <ul>
        <form className="info-link-add" onSubmit={this.onSubmit}>
            <input type="text" name="title" placeholder="Title" required/>
            <input type="url" name="url" placeholder="Url" required/>
            <input type="submit" name="submit" value="Add new link"/>
        </form>
        </ul>
        { this.props.children }
      </div>
    )
  }
}
export default Hello;