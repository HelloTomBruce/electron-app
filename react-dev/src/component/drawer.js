import React from 'react'

class Drawer extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        const style = {
            width: this.props.switchOn ? this.props.maxWidth : this.props.minWidth
        }
        return (
            <div className='drawer-container' style={style}>

            </div>
        )
    }
}

export default Drawer