import React from 'react'
import '@/component-less/dragAddFile.less'

class DragAddFile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filePathArr: []
        }
    }
    handleDragOver = (e) => {
        e.preventDefault()
        return false
    }
    handleDragEnd = (e) => {
        e.preventDefault()
        return false
    }
    handleDrop = (e) => {
        e.preventDefault()
        for (let f of e.dataTransfer.files) {
            if (f.type.indexOf('image') !== -1) {
                this.setState({
                    filePathArr: [...this.state.filePathArr, f.path]
                })
            }
            console.log(f.path)
        }
        return false
    }
    render () {
        return (
            <div>
                <div className='drag-container'
                    draggable={true}
                    onDragOver={this.handleDragOver}
                    onDragEnd={this.handleDragEnd}
                    onDrop={this.handleDrop}
                    onDragEnter={this.handleDragEnd}
                    onDragLeave={this.handleDragEnd}
                    >
                </div>
                <div className='file-list'>
                    {this.state.filePathArr.map((file, index) => {
                        return (
                            <img src={file} key={index}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default DragAddFile