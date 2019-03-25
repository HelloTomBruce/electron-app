import React from 'react'
import '@/component-less/dragAddFile.less'

class DragAddFile extends React.Component {
    constructor(props) {
        super(props)
    }
    handleDragOver = () => {
        return false
    }
    handleDragEnd = () => {
        return false
    }
    handleDrop = (e) => {
        console.log(3434)
        e.preventDefault()
        for (let f of e.dataTransfer.files) {
            console.log(f)
        }
        return false
    }
    render () {
        return (
            <div className='drag-container'
                draggable={true}
                onDragOver={this.handleDragOver}
                onDragEnd={this.handleDragEnd}
                onDrop={this.handleDrop}
                onDragEnter={this.handleDragEnd}
                onDragLeave={this.handleDragEnd}
                >
            </div>
        )
    }
}

export default DragAddFile