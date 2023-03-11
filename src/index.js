import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Skills from './containers/Skills/Skills';
import Mobiles from './containers/Mobiles/Mobiles';
import Privacy from './containers/Privacy/Privacy';
import Card from './containers/Card/Card';

import './index.scss';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Skills /> },
    { path: 'mobiles.html', element: <Mobiles /> },
    { path: 'privacy.html', element: <Privacy /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
      <Card />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
