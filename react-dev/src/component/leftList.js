import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { initList } from '@/redux/action/musicSheet'
import { getLocalItem } from '@/redux/local'
import SvgIcon from '@/component/svgIcon'

const mapStateToProps = state => {
    return {
        list: state.musicSheet.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initList: (list) => dispatch(initList(list))
    }
}
class LeftList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '100%'
        }
    }
    componentWillMount () {
        let list = JSON.parse(getLocalItem('musicSheet'))
        this.props.initList(list)
    }
    render () {
        return (
            <div className='sheet-music-list' style={{width: this.state.width}}>
                <div className='add-sheet-music'>
                    <Link to='/'>
                        <SvgIcon iconClass='icon-Add'/>添加曲谱
                    </Link>
                </div>
                {this.props.list.map((item, index) => {
                    return (
                        <div className='sheet-music-one' key={index}>
                            <Link to={`/view/${index}`}>{item.name}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftList)