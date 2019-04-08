import React from 'react'
import SvgIcon from '@/component/svgIcon'

class BottomOperate extends React.Component {
    constructor(props) {
        super(props)
    }
    changeActiveCount = (e, count) => {
        e.preventDefault()
        this.props.changeActiveCount(count)
    }
    scale = (e, type) => {
        e.preventDefault()
        this.props.scale(type)
    }
    render () {
        return (
            <div className='bottom-operate'>
                <div className='bottom-operate-one' onClick={e => this.changeActiveCount(e, 1)}>
                    一
                </div>
                <div className='bottom-operate-one' onClick={e => this.changeActiveCount(e, 2)}>
                    二
                </div>
                <div className='bottom-operate-one' onClick={e => this.changeActiveCount(e, 3)}>
                    三
                </div>
                <div className='bottom-operate-one' onClick={e => this.scale(e, 'blowUp')}>
                    <SvgIcon iconClass='icon-blowup'/>
                </div>
                <div className='bottom-operate-one' onClick={e => this.scale(e, 'narrow')}>
                    <SvgIcon iconClass='icon-narrow'/>
                </div>
            </div>
        )
    }
}

export default BottomOperate