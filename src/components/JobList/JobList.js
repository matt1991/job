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
    this.state = {
      jobList :[{name: "job1", place: "central"},{name: "job2", place: "TST"}]
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className="row">
            <div className="col-sm-8">
              <div className={cx(s.list, "list-group")}>
                {this.state.jobList.map(item=><JobItem job={item}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(JobList, s);
