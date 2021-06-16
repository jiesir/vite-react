import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import basicRoutes from 'router-inject';
import "@/styles/utils/transition.less";

const eleList = [];
for (let index = 0; index < basicRoutes.length; index++) {
  eleList.push(<Route path={basicRoutes[index].path} exact component={basicRoutes[index].component} key={index}></Route>);
}

class Router extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <TransitionGroup>
            <CSSTransition
              classNames='show'
              timeout={500}
            >
              <Switch>
                <Route path='/' exact>
                  <Redirect to={basicRoutes[0].path} />
                </Route>
                {eleList}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </HashRouter>
      </Fragment>
    )
  }
}

export default Router;