import loadable from '@loadable/component';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from 'views/layout.mobile';
import { Helmet } from 'react-helmet';
import { title, description } from './routes';
import { SeoText } from './components/common';

const IndexPage = loadable(() => import('views/mobile'));

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
          <Route path="/" component={IndexPage} />
          <Route
            exact
            path="/"
            component={() => (
              <SeoText title={title} description={description} />
            )}
          />
        </MainLayout>
      </Router>
    );
  }
}

export default RouterComponent;
