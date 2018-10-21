import React from 'react';
import { Meteor } from 'meteor/meteor';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.enter=this.enter.bind(this);
    }
    componentDidMount() {
        console.log('componentDidMount');
        document.getElementById('message-to-send').focus();
        document.removeEventListener('keypress', this.enter);
        document.addEventListener('keypress', this.enter);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        document.removeEventListener('keypress', this.enter);
    }
    formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    SendMessage(e)
    {
        e.preventDefault();
        console.log(e.target['message-to-send'].value);
        let mess=e.target['message-to-send'].value;
        if(mess!=''){
        Meteor.call('massagespublic.insert',{content:mess},function(err){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Send success!");
            }
        });
        }
        
        e.target['message-to-send'].value="";
    }
    componentDidUpdate(pre)
    {
        let scroll = document.getElementById('chat-history');
        scroll.scrollTop = scroll.scrollHeight;
        scroll.animate({scrollTop: scroll.scrollHeight});
    }
    enter(target) {       
        if (target.charCode === 13) {
            target.preventDefault();
            console.log('Sendd');
            /* after that component unmounted */
            document.getElementById('submit').click();
        }
    }
    render(){
        console.log(this.props);
        
        return(
            <div>
                <div className="container">
                    <div className="chat">
                        <div className="chat-header clearfix">
                            <img src="/favicon.ico" alt="avatar" />
                            
                            <div className="chat-about">
                            <div className="chat-with">Chat with Người lạ</div>
                            <div className="chat-num-messages">Đã có { this.props.messsages.length } tin nhắn được gửi đi !</div>
                            </div>
                            <i className="fa fa-star"></i>
                        </div>
                        
                        <div id="chat-history" className="chat-history">
                            <ul>
                            {
                                <For each="item" index="i" of={ this.props.messsages }>
                                    <li className="clearfix" key={item._id}>
                                        <div className="message-data align-right">
                                        <span className="message-data-time" >{this.formatDate(new Date(item.createdAt))}</span> &nbsp; &nbsp;
                                        <span className="message-data-name" >Người lạ (là bạn ?)</span> <i className="fa fa-circle me"></i>
                                        
                                        </div>
                                        <div className="message other-message float-right">
                                        {item.content}
                                        </div>
                                    </li>
                                </For>
                            }
                            
                            
                            {/* <li>
                                <div className="message-data">
                                <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                <span className="message-data-time">10:12 AM, Today</span>
                                </div>
                                <div className="message my-message">
                                Are we meeting today? Project has been already finished and I have results to show you.
                                </div>
                            </li> */}
                            
                            </ul>
                            
                        </div>
                        
                        <div className="chat-message clearfix">
                            <form onSubmit={this.SendMessage}>
                                    <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3" defaultValue=""></textarea>
                                        
                                    <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-file-image-o"></i>
                                        
                                    <button id="submit" name="submit">Send</button>
                            </form>
                        </div> 
                        
                    </div> 
                
                </div>
            </div>
        )
    }
}

export default Home;

