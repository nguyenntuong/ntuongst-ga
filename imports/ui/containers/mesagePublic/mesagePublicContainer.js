import Home from '../../components/pages/home/home';
import { compose } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { MessagesPublic } from '../../../api/messagespublic/messagespublic';
import { Tracker } from 'meteor/tracker';
function composer(props,onData)
{
    Tracker.autorun(function(){
        const handle = Meteor.subscribe('messagespublic.all');
        onData(null,{
            // Truyền giá trị trả về ở đây
            messsages:MessagesPublic.find({}).fetch()
        })
    })
}

export default compose(composer)(Home);