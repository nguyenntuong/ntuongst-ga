import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';
import Script from 'react-script-tag';

// Import needed templates
import Body from '../../ui/layouts/body/body.js';
import MessageContainer from '../../ui/containers/mesagePublic/mesagePublicContainer';
import NotFound from '../../ui/components/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(Body, { main: <MessageContainer></MessageContainer>,title:"Nhà của Tường :3" });
  },
});

FlowRouter.notFound = {
  action() {
    mount(Body, { main: <NotFound/> });
  },
};
