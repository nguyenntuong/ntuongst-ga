import Infor from '../../components/info/info';
import { compose } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Links } from '../../../api/links/links';
import { Tracker } from 'meteor/tracker';
function composer(props,onData)
{
    Tracker.autorun(function(){
        const handle = Meteor.subscribe('links.all');
        onData(null,{
            // Truyền giá trị trả về ở đây
            items:Links.find({}).fetch()
        })
    })
}

export default compose(composer)(Infor);