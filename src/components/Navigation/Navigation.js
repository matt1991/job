/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import { Link } from 'react-router';

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <span className={cx(s.search, "glyph glyphicon glyphicon-search pull-right")} 
        aria-hidden="true" 
        onClick={this.props.onSearchButtonPressed}
        ></span>
      </div>

    );
  }

}

export default withStyles(Navigation, s);
