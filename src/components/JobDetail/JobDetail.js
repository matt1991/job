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

  constructor(props) {
    super();
    this.state = {
      job:{
        name: "",
          company:{
            name:"",
            description:"",
            location:""
          },
          position:"",
          requirement:"",
          contactName:"",
          email:"",
          phone:""
      }
    };
  }


  componentWillMount() {
    let { jobId } = this.props.params

    var url = 'http://192.168.8.6:8080/api/job/view?jobId=' + this.props.params.jobId;
    

   fetch(url).then(response => response.json())
     .then(data => {
        console.log(data);
        console.log("************");
        let result = {
          name: data.Name,
          company:{
            name:data.Company.Name,
            description:data.Company.Description,
            location:data.Company.Location
          },
          position:data.Position,
          requirement:data.Requirement,
          contactName:data.ContactName,
          email:data.Email,
          phone:data.Phone
        }
        console.log("^&^&&&&&");
        document.title = result.position + " " + result.company.name;
        this.setState({job: result}); 
        // console.log(this.state);
        // console.log(this.state.job.Company);
      }).catch(e =>console.log(e));

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
          <div className="col-sm-8">
              <h1 >{this.state.job.company.name}</h1>
              <h2 className="divider"></h2>
              <h2 > {this.state.job.position}</h2>
              <div dangerouslySetInnerHTML={{__html: this.state.job.requirement}}></div>
              <h2 className="divider"></h2>
              <div ><span> {this.state.job.contactName}</span></div>
              <div ><span> {this.state.job.email}</span></div>
              <div ><span> {this.state.job.phone}</span></div>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(JobDetail, s);
