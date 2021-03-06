/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import { IndexLink } from 'react-router';
import Navigation from '../Navigation';

class Header extends Component {

  constructor(props) {
    super();
    this.state = {
      search:false
    };
  }

  onSearchButtonPressed() {
    this.setState({
      ...this.state,
      search:!this.state.search
    });
    console.log("onSearchButtonPressed");
  }

  // <Navigation className={s.nav}  onSearchButtonPressed={::this.onSearchButtonPressed}/>
          // <div className>
        //   <input type="text" className={this.state.search?s.searchshow:s.searchhide} placeholder="Search"></input>
        // </div>

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <IndexLink className={s.brand} to={`/job/list`}>
            <span className={s.brandTxt}>帮帮推</span>
          </IndexLink>
        </div>

      </div>
    );
  }

}

export default withStyles(Header, s);
