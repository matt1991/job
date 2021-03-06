/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './App.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../Header';
import Footer from '../Footer';

class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static contextTypes = {
    insertCss: PropTypes.func,
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default withStyles(App, s);
