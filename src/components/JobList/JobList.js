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

import fetch from './../../core/fetch';


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

  componentDidMount() {
    // fetch(`http://47.89.55.214:8080/api/job/list?curPage=1&pageSize=100`).then(response => response.json())
    // .then(data => this.setState({jobList: data.docs})).catch(e =>console.log(e));

    let data = {"docs":[{"_id":6,"PostedBy":1,"Position":"123","CompanyId":null,"SalaryMin":0,"SalaryMax":0,"IsNegotiable":true,"Requirement":"<p>123123<br/></p>","Description":"123","Category":"unknown","Email":"123@123","Phone":"123","WeChat":null,"Status":"PUBLISHED","ContactName":"123","__v":0,"ModifiedTime":"2016-03-21T08:47:35.832Z","CreatedTime":"2016-03-21T08:47:35.832Z","IsExpired":false,"IsDeleted":false,"IsPublished":true,"JobSeekers":[],"Welfares":{"Medical":false,"DoublePay":false,"MPF":false,"Weekends":false},"Company":{"Name":"123","Description":"123"}}],"total":1,"limit":10,"page":1,"pages":1};

    this.setState({
      jobList: data.docs
    });


    // const response = await fetch(`http://47.89.55.214:8080/api/job/list?curPage=1&pageSize=100`);
    // const data = await response.json();
    // this.setState({
    //   jobList: data.docs
    // });


   //  this.state = {jobList:new Array()};
   //  for (var i = 0; i < 50; i++) {
   //    let job;
   //    if (i%2 == 0) {
   //      job = {name: "PHP Programmer", place: "Central", company:"Amazon",salary:"$5000", type:"part-time",id:i};

   //    } else if (i%3 == 0) {
   //      job = {name: "iOS Developer", place: "Tsim Sha Tsui", company:"Google",salary:"$5000", type:"full-time"};
   //    } else {
   //      job = {name: "Android Developer", place: "Causeway", company:"Facebook",salary:"$5000", type:"full-time"};
   //    }

   //    this.state.jobList.push(job);
   // }
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
