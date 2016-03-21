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
      <Link className="list-group-item" to={pathname:"/job/detail", query:{this.state.job._id}}>
        <div className="row">
          <div className={cx("col-xs-3", s.jobtitle)}>
            <strong>{this.state.job.Position}</strong><br/>
            {
              this.state.job.company?this.state.job.company.Name:"company name null"}
          </div>
          <div className={cx("col-xs-6 text-center", s.joblocation)}>
            <i className={cx("glyphicon glyphicon-home", s.homeicon)}></i><strong>{this.state.job.company?this.state.job.company.place:"place null"}</strong>
          </div>
          <div className={cx("col-xs-3", "text-center", )}>
            <p ><strong>{this.state.job.SalaryMax}</strong></p>
            <p className={cx("badge",s.fulltime)}>{this.state.job.type}</p>
          </div>
        </div>
      </Link>
    );
  }

}

export default withStyles(JobItem, s);
