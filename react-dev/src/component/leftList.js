import React from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from '@/component/svgIcon'

class LeftList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '100%',
            list: []
        }
    }
    componentWillMount () {
        let list = localStorage.getItem('sheet-music') ? JSON.parse(localStorage.getItem('sheet-music')) : []
        this.setState({
            list
        })
    }
    render () {
        return (
            <div className='sheet-music-list' style={{width: this.state.width}}>
                <div className='add-sheet-music'>
                    <Link to='/'>
                        <SvgIcon iconClass='icon-Add'/>添加曲谱
                    </Link>
                </div>
                {this.state.list.map(item => {
                    return (
                        <div className='sheet-music-one'>{item.name}</div>
                    )
                })}
            </div>
        )
    }
}

export default LeftList