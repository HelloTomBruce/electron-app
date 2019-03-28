import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import DragAddFile from '@/page/dragAdd'
import ImgView from '@/page/imgDisplay'
import LeftList from '@/component/leftList'
import SvgIcon from '@/component/svgIcon'
import '@/page-less/index.less'
class AppLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftIsHide: true
    }
  }
  toggleHideLeft = () => {
    this.setState({
      leftIsHide: !this.state.leftIsHide
    })
  }
  render () {
    let { leftIsHide } = this.state
    return (
      <Router>
        <div className='app-container'>
          <div className='left-list' style={{width: leftIsHide ? '25px' : '200px'}}>
            <LeftList hidden={leftIsHide}/>
            <span className='left-list-switch' onClick={this.toggleHideLeft}>
              <SvgIcon iconClass={leftIsHide ? 'icon-right' : 'icon-left'}></SvgIcon>
            </span>
          </div>
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