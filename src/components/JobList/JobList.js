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

import JobItem from './JobItem';


const title = 'Job List';

class JobList extends Component {

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
    this.state = {jobList:new Array()};
    for (var i = 0; i < 50; i++) {
      let job;
      if (i%2 == 0) {
        job = {name: "PHP Programmer", place: "Central", company:"Amazon",salary:"$5000", type:"part-time",id:i};

      } else if (i%3 == 0) {
        job = {name: "iOS Developer", place: "Tsim Sha Tsui", company:"Google",salary:"$5000", type:"full-time"};
      } else {
        job = {name: "Android Developer", place: "CoswayBay", company:"Facebook",salary:"$5000", type:"full-time"};
      }

      this.state.jobList.push(job);
   }
    // this.state = {
    //   jobList :[{name: "PHP Programmer", place: "Central", company:"Amazon",salary:"$5000", type:"part-time"},
    //   {name: "iOS Developer", place: "Tsim Sha Tsui", company:"Google", salary:"$5000", type:"full-time"}]
    // };
  }

  render() {
    return (
      <div className={s.root}>
      <h1 className="text-center"> Job List</h1>
        <div className={s.container}>
            <div className="col-sm-8">
              <div className={cx(s.list, "list-group")}>
                {this.state.jobList.map(item=><JobItem job={item} key={item.id}/>)}
              </div>
            </div>
          
        </div>
      </div>
    );
  }

}

export default withStyles(JobList, s);
