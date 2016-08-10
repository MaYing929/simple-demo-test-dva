import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'dva/router';
import pageRouts from './configs/Routes';
pageRouts.push({
  path: '*',
  getComponent: (location, callback) => {
    require.ensure([], (require) => {
      callback(null, require('./pages/NoFound.jsx'));
    })
  }
})
const routes = {
  path: '/',
  component: require('./components/App'),
  indexRoute: {
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./components/List.jsx'));
      })
    }
  },
  childRoutes: pageRouts
};

export default function({history}) {
  return (<Router routes={routes} history={history}/>);
};
