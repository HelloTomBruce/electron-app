import React from 'react'
import { Input } from 'antd'

const Search = Input.search
class SearchImg extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className='search-img-container'>
                <div className='search-img-container_input'>

                </div>
            </div>
        )
    }
}