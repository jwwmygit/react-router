import React from 'react'
//Switch只显示匹配的
import {Route, Switch, Redirect} from 'react-router-dom'
//引入自己的link
import MyNaveLink from './my-nav-link.jsx';
import About from '../views/about'
import Home from '../views/home'
export default class App extends React.Component {

  render(){
    return(
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                  {/*导航路由链接*/}
                <MyNaveLink className="list-group-item" to='/about' >About</MyNaveLink>
                <MyNaveLink className="list-group-item" to='/home' >Home</MyNaveLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                    {/*可切换的路由组件*/}
                  <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    {/*默认匹配*/}
                    <Redirect to='/about'/>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
/*
* 路由链接NavLink
* 注册路由Router
* */
