import React from 'react'
import { Slider } from 'antd'
import SvgIcon from '@/component/SvgIcon'

class BottomOperate extends React.Component {
    constructor(props) {
        super(props)
    }
    changeActiveCount = (e, count) => {
        e.preventDefault()
        this.props.changeActiveCount(count)
    }
    scale = (value) => {
        let scaleNum = value > 0 ? Math.abs(value) : Math.abs(1 / value)
        this.props.scale(scaleNum)
    }
    render () {
        return (
            <div className='bottom-operate'>
                <div className='bottom-operate-scale'>
                    <Slider defaultValue={0} max={5} min={-5} step={0.1} onChange={this.scale}/>
                </div>
                <div className='bottom-operate-page'>
                    <span className='bottom-operate-page-one' onClick={e => this.changeActiveCount(e, 1)}>
                        一
                    </span>
                    <span className='bottom-operate-page-one' onClick={e => this.changeActiveCount(e, 2)}>
                        二
                    </span>
                    <span className='bottom-operate-page-one' onClick={e => this.changeActiveCount(e, 3)}>
                        三
                    </span>
                </div>
            </div>
        )
    }
}

export default BottomOperate