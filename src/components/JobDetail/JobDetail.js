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
import s from './JobDetail.scss';
import cx from 'classnames';


import JobItem from '../JobList/JobItem';



const title = 'Job Detail';

class JobDetail extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  // getInitialState() {
  //   return {
  //     jobList:null
  //   };
  // };

  componentWillMount() {
    // $.get(this.props.source, function (result) {
    //   this.setState({
    //     jobList: result.jobList
    //   });
    // });

    this.state = {
      job :{name: "PHP Programmer", place: "Central", company:"Amazon",salary:"$5000", type:"part-time", 
      conpanywebsite:"http://www.amazon.com", description:"We have an immediate opening for an experienced iOS application developer. This is a direct-hire onsite position. 3rd party agencies, staffing companies, and corp-to-corp candidates will not be considered. U.S. Citizens and those authorized to work in the U.S. are encouraged to apply. We are unable to sponsor at this time.",
      requirement:""
    }
    };

    
    // this.state = {
    //   job :{name: "job1", place: "central", company:"Amazon",salary:"$5000", type:"part-time"}
    // };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <h1 >{this.state.job.company}</h1>
            <a href={this.state.job.conpanywebsite}>{this.state.job.conpanywebsite}</a> 
            <h2 className="divider"></h2>
            <h2 > {this.state.job.name}</h2>
            <p>{this.state.job.description}</p>         
        </div>
      </div>
    );
  }

}

export default withStyles(JobDetail, s);
