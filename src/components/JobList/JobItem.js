/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobList.scss';
import cx from 'classnames';


class JobItem extends Component {


  constructor(props) {
    super();
    this.state = {
      job:props.job
    };
  }

  render() {
    return (
      <a className="list-group-item">
        {this.state.job.name}
      </a>
    );
  }

}

export default withStyles(JobItem, s);
