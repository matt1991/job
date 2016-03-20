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

import { Link } from 'react-router';



class JobItem extends Component {


  constructor(props) {
    super();
    this.state = {
      job:props.job
    };
  }

  render() {
    return (
      <Link className="list-group-item" to="/job/detail">
        <div className="row">
          <div className={cx("col-xs-4", s.jobtitle)}>
            <p><strong>{this.state.job.name}</strong></p>
            <p>{this.state.job.company}</p>
          </div>
          <div className={cx("col-xs-4", s.joblocation)}>
            <p><strong>{this.state.job.place}</strong></p>
          </div>
          <div className={cx("col-xs-4", "text-center", )}>
            <p ><strong>{this.state.job.salary}</strong></p>
            <p className={cx("badge",s.fulltime)}>{this.state.job.type}</p>
          </div>
        </div>
      </Link>
    );
  }

}

export default withStyles(JobItem, s);
