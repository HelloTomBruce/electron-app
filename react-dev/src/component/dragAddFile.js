import React from 'react'
import { connect } from 'react-redux'
import { addOne } from '@/redux/action/musicSheet'
import { Input, Button } from 'antd'
import '@/component-less/dragAddFile.less'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addOne: (sheet) => dispatch(addOne(sheet))
})
class DragAddFile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fileArr: [],
            name: ''
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
                    fileArr: [...this.state.fileArr, f]
                })
            }
            console.log(f.path)
        }
        return false
    }
    handleInputName = (e) => {
        let value = e.target.value
        this.setState({
            name: value
        })
    }
    addToStore = () => {
        let sheet = {
            name: this.state.name,
            fileArr: this.state.fileArr
        }
        this.props.addOne(sheet)
        this.setState({
            fileArr: [],
            name: ''
        })
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
                <div className="add-to-store">
                    <Input placeholder='请输入曲谱名称' onInput={this.handleInputName} defaultValue={this.state.fileArr[0] && this.state.fileArr[0].name}/>
                    <Button onClick={this.addToStore}>添加</Button>
                </div>
                <div className='file-list'>
                    {this.state.fileArr.map((file, index) => {
                        return (
                            <img src={file.path} key={index}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAddFile)