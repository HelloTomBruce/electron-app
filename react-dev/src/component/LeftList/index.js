import React from 'react'
import { connect } from 'react-redux'
import SvgIcon from '@/component/SvgIcon'
import './index.less'
import SheetList from '../SheetList';
import CollectSwiper from '@/component/CollectSwiper'

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = () => {
    return {}
}
class LeftList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftIsHide: false
        }
    }
    toggleHideLeft = () => {
        this.setState({
          leftIsHide: !this.state.leftIsHide
        })
    }
    componentDidMount () {}
    render () {
        const { leftIsHide } = this.state
        return (
            <div className='left-list' style={{width: leftIsHide ? '50px' : '350px'}}>
                <div className='left-list-switch' onClick={this.toggleHideLeft}>
                    <span className="switch-icon">
                        <SvgIcon iconClass={leftIsHide ? 'icon-right' : 'icon-left'}/>
                    </span>
                </div>
                {leftIsHide ? null : <SheetList/> }
                <div className="bottom-swiper">
                    <CollectSwiper/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftList)