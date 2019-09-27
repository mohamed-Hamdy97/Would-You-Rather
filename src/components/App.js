import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoadingBar from "react-redux-loading";
import Nav from './Nav';
import Login from './login';
import { getInitialDatat } from '../actions/shared';
import HomePage from './homePage';
import LeaderBoard from './leaderBoard';
import NewQuestion from './newQuestion';
import ViewPoll from './ViewPoll';
import { Error_Page } from "./Error_Page";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialDatat())
  }
  render() {
    const { AuthUser } = this.props
    return (
      <Router>
        <Fragment >
          <LoadingBar />
          <Nav />
          <div className='container'>
            {
              !AuthUser ?
                <div className="content">
                  <Login />
                </div>
                :
                (
                  <div className='content'>
                    <Switch>
                      <Route path='/' exact component={HomePage} />
                      <Route path='/LeaderBoard' exact component={LeaderBoard} />
                      <Route path='/add' exact component={NewQuestion} />
                      <Route path='/questions/:id' exact component={ViewPoll} />
                      <Route path='questions/errorPage' component={Error_Page} />
                      <Route component={Error_Page} />
                    </Switch>

                  </div>
                )
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ AuthUser }) {
  return {
    AuthUser
  }
}

export default connect(mapStateToProps)(App);
