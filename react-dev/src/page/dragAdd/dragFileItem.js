import React from 'react'
import { sortable } from 'react-sortable'
import { DragAddContext } from './context'
import SvgIcon from '@/component/SvgIcon'

class DragFileItem extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = DragAddContext.Consumer
    render () {
        return (
            <div className="img-file-one" {...this.props}>
                <span className="close-icon" onClick={e => this.context.removeOne(e, this.props.index)}>
                    <SvgIcon iconClass='icon-close'/>
                </span>
                <img src={this.props.item.path}/>
                <h5>{this.props.item.name}</h5>
            </div>
        )
    }
}

export default sortable(DragFileItem)