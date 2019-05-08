import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import DragAddFile from '@/page/dragAdd'
import ImgView from '@/page/imgDisplay'
import LeftList from '@/component/LeftList'
import "./app.less"

class AppLayout extends Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (
      <Router>
        <div className='app-layout-container'>
          <LeftList/>
          <div className='main-container'>
            <Switch>
              <Route exact path='/' component={DragAddFile}/>
              <Route exact path='/view/:id' component={ImgView}/>
              <Redirect to='/'/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default AppLayout