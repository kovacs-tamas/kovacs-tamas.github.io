import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Skills from './containers/Skills/Skills';
import Mobiles from './containers/Mobiles/Mobiles';
import Privacy from './containers/Privacy/Privacy';
import Missing from './containers/Missing/Missing';
import Card from './containers/Card/Card';

import './index.scss';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Skills /> },
    { path: 'mobiles.html', element: <Mobiles /> },
    { path: 'privacy.html', element: <Privacy /> },
    { path: '*', element: <Missing /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <ScrollToTop />
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
