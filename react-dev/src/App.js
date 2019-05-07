import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hot } from "react-hot-loader";
import ErrorTip from "@/component/ErrorTip";
import ErrorBoundary from "@/component/ErrorBoundary";
import AppLayout from '@/layout/app'
import "@/style/index.less";
//import getVersion from './render-process'

class App extends Component {
    constructor(props) {
        super(props)
        //getVersion()
    }

    render () {
        return (
            <div className="app-container">
                <ErrorTip />
                <ErrorBoundary>
                    <AppLayout />
                </ErrorBoundary>
            </div>
        )
    }
}

const mapStateToProps = () => ({});

export default hot(module)(connect(mapStateToProps)(App));
