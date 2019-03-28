import React from 'react'
import { DragAddContext } from './context'
import DragFileItem from './dragFileItem'

class DragFileGrid extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = DragAddContext.Consumer
    render () {
        return (
            <div className='file-list'>
                {this.context.fileArr.map((file, index) => {
                    return (
                        <DragFileItem
                            key={index}
                            item={file}
                            onSortItems={this.context.onSortFiles}
                            items={this.context.fileArr}
                            index={index}
                            sortId={index}
                        ></DragFileItem>
                    )
                })}
            </div>
        )
    }
}

export default DragFileGrid
