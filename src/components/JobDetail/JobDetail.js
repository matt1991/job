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

import fetch from './../../core/fetch';




const title = 'Job Detail';

class JobDetail extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };


  componentWillMount() {
    let { jobId } = this.props.params
    

   fetch(`http://47.89.55.214:8080/api/job/view?jobId={jobId}`).then(response => response.json())
     .then(data => this.setState({jobList: data.docs})).catch(e =>console.log(e));

    // this.state = {
    //   job :{name: "PHP Programmer", place: "Central", company:"Amazon",salary:"$5000", type:"part-time", 
    //   conpanywebsite:"http://www.amazon.com", description:``,
    //   requirement:""
    // }
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
            <div dangerouslySetInnerHTML={{__html: this.state.job.description}}></div>
        </div>
      </div>
    );
  }

}

export default withStyles(JobDetail, s);
