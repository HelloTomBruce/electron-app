import React from 'react'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import SvgIcon from '@/component/SvgIcon'
import BottomOperate from './bottomOperate'
import './imgDisplay.less'

const mapStateToProps = state => {
    return {
        list: state.musicSheet.list
    }
}
class ImgDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            activeLeftIndex: 0,
            activeCount: 1,
            scaleNum: 1
        }
    }
    componentDidMount () {
        this.setState({
            index: this.props.match.params.id
        })
    }
    prevImg = () => {
        this.setState({
            activeLeftIndex: this.state.activeLeftIndex <= 0 ? 0 : this.state.activeLeftIndex - this.state.activeCount
        })
    }
    nextImg = () => {
        let { activeLeftIndex, activeCount } = this.state
        let fileCount = this.props.list[this.state.index].fileArr.length
        this.setState({
            activeLeftIndex: activeLeftIndex >= fileCount - activeCount ? fileCount - activeCount : activeLeftIndex + activeCount
        })
    }
    scale = (type) => {
        let { scaleNum } = this.state
        switch(type) {
            case 'blowUp':
                scaleNum += 0.2
                break
            case 'narrow':
                scaleNum -= 0.2
                break
            default:
                break
        }
        this.setState({
            scaleNum
        })
    }
    changeActiveCount = (count) => {
        this.setState({
            activeCount: count,
            activeLeftIndex: 0
        })
    }
    renderImgList = () => {
        if (!this.props.list[this.state.index]) {
            return null
        }
        return (
            <div className='img-view-container' style={{transform: 'scale(' + this.state.scaleNum + ')'}}>
                {this.props.list[this.state.index].fileArr.slice(this.state.activeLeftIndex, this.state.activeCount + this.state.activeLeftIndex).map((item, index) => {
                    return (
                        <Draggable
                            axis="both"
                            handle='.img-one'
                            scale={1}
                            bounds="parent"
                            key={index}
                        >
                            <img className='img-one' src={item.path}/>
                        </Draggable>
                    )
                })}
            </div>
        )
    }
    render () {
        return (
            <div className='img-display'>
                {this.renderImgList()}
                <div className='prev-btn' onClick={this.prevImg}>
                    <SvgIcon iconClass='icon-left'/>
                </div>
                <div className='next-btn' onClick={this.nextImg}>
                    <SvgIcon iconClass='icon-right'/>
                </div>
                <BottomOperate scale={this.scale} changeActiveCount={this.changeActiveCount}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ImgDisplay)