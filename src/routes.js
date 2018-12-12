import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from 'views/layout';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet';
import { SeoText } from 'components/common';
import Error from 'components/error';

const IndexPage = loadable(() => import('views/desktop'));

export const title = 'seo title';
export const description = 'seo description';

class RouterComponent extends Component {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  renderError = () => (
    <MainLayout>
      <Error
        errorCode="444"
        errorTitle="DidCatch"
        errorText="we has a problem :("
      />
    </MainLayout>
  );

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return this.renderError();
    }
    return (
      <Router>
        <MainLayout>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
          <Route path="/" component={IndexPage} />
          <Route exact path="/" component={() => <SeoText title={title} description={description} />} />
        </MainLayout>
      </Router>
    );
  }
}

export default RouterComponent;
