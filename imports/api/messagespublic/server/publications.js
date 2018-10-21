// All links-related publications

import { Meteor } from 'meteor/meteor';
import { MessagesPublic } from '../messagespublic';

Meteor.publish('messagespublic.all',function(){
  return MessagesPublic.find();
})
