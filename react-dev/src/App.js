import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
//import getVersion from './render-process'

class App extends Component {
    constructor(props) {
        super(props)
        //getVersion()
    }

    render () {
        return (
            <AppLayout/>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)