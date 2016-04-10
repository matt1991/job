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
      job:{
          _id: props.job._id,
          name: props.job.Name,
          company:{
            name:props.job.Company.Name,
            description:props.job.Company.Description,
            location:props.job.Company.Location
          },
          position:props.job.Position,
          requirement:props.job.Requirement,
          contactName:props.job.ContactName,
          email:props.job.Email,
          phone:props.job.Phone,
          salaryMax:props.job.SalaryMax
      }
    };
  }

  render() {
    return (
      <Link className="list-group-item" to={`/job/detail/${this.state.job._id}`}>
        <div className="row">
          <div className={cx("col-xs-3", s.jobtitle)}>
            <strong>{this.state.job.position}</strong><br/>
            {this.state.job.company?this.state.job.company.name:"company name null"}
          </div>
          <div className={cx("col-xs-6 text-center", s.joblocation)}>
            <i className={cx("glyphicon glyphicon-home", s.homeicon)}></i><strong>{this.state.job.company?this.state.job.company.location:"place null"}</strong>
          </div>
          <div className={cx("col-xs-3", "text-center", )}>
            <p ><strong>{this.state.job.salaryMax==0?"面谈":this.state.job.salaryMax}</strong></p>
            <p className={cx("badge",s.fulltime)}>{}</p>
          </div>
        </div>
      </Link>
    );
  }

}

export default withStyles(JobItem, s);
