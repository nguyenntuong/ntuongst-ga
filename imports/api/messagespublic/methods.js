// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { MessagesPublic } from './messagespublic';
Meteor.methods({
  'massagespublic.insert'(massage)
  {
    check(massage.content, String);

    return MessagesPublic.insert({
      content:massage.content,
      createdAt: Date.now(),
    });
  },
  'massagespublic.remove'(_id) {
    return MessagesPublic.remove({
      _id
    });
  },
});
