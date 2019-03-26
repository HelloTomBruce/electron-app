import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom"
import DragAddFile from '@/component/dragAddFile'
import ImgView from '@/component/img'
import LeftList from '@/component/leftList'
import '@/page-less/index.less'
class AppLayout extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Router>
        <div className='app-container'>
          <div className='left-list'>
            <LeftList/>
          </div>
          <div className='main-container'>
            <Route exact path='/' component={DragAddFile}/>
            <Route exact path='/view/:id' component={ImgView}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default AppLayout