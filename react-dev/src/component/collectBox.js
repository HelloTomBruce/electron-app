import React from 'react'
import SvgIcon from '@/component/svgIcon'
import '@/component-less/collectBox.less'

class CollectBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siwtchOn: true,
            style: {
                width: this.props.direction === 'vertical' ? this.props.width : 'auto',
                height: this.props.direction === 'horizontal' ? this.props.height : 'auto'
            },
            switchIcon: {
                on: this.props.direction === 'vertical' ? 'icon-bottom': 'icon-left',
                off: this.props.direction === 'vertical' ? 'icon-top' : 'icon-right'
            },
            switchStyle: {
                width: this.props.direction === 'vertical' ? this.props.width : '35px',
                height: this.props.direction === 'vertical' ? '100%' : this.props.height
            }
        }
    }
    toggleSwitch = () => {
        this.setState({
            siwtchOn: !this.state.siwtchOn
        })
    }
    render () {
        let { siwtchOn, style, switchIcon, switchStyle } = this.state

        return (
            <div className='collect-box-container' style={style}>
                <div className='collect-box-switch' style={switchStyle} onClick={this.toggleSwitch}>
                    <SvgIcon iconClass={siwtchOn ? switchIcon.on : switchIcon.off}></SvgIcon>
                </div>
                <div className={this.props.direction === 'vertical' ? 'collect-box-list flex' : 'collect-box-list inline'} style={{display: siwtchOn ? '' : 'none'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CollectBox