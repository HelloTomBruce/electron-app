import React from 'react'
import { connect } from 'react-redux'
import { addOne } from '@/redux/action/musicSheet'
import { Input, Button, Modal, message } from 'antd'
import SvgIcon from '@/component/SvgIcon'
import { DragAddContext } from './context'
import DragFileGrid from './dragFileGrid'
import './dragAdd.less'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addOne: (sheet) => dispatch(addOne(sheet))
})
class DragAddFile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fileArr: [
                {
                    name: '图片一',
                    path: 'https://picsum.photos/400/700/?random'
                },
                {
                    name: '图片二',
                    path: 'https://picsum.photos/400/700/?random'
                },
                {
                    name: '图片三',
                    path: 'https://picsum.photos/400/700/?random'
                }
            ],
            name: '',
            nameDialogVisible: false
        }
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
        if (this.state.fileArr.length <= 0) {
            message.warn('请先添加文件')
            return
        }
        this.setState({
            nameDialogVisible: true
        })
    }
    removeOneImg = (e, index) => {
        e.preventDefault()
        let fileArr = [...this.state.fileArr]
        fileArr.splice(index, 1)
        this.setState({
            fileArr
        })
    }
    handleOk = () => {
        let sheet = {
            name: this.state.name || this.state.fileArr[0].name,
            fileArr: this.state.fileArr
        }
        this.props.addOne(sheet)
        this.setState({
            fileArr: [],
            name: '',
            nameDialogVisible: false
        })
    }
    handleCancel = () => {
        this.setState({
            nameDialogVisible: false
        })
    }
    onSortFiles = (fileArr) => {
        console.log(fileArr)
        this.setState({
            fileArr
        })
    }
    render () {
        const contextValue = {
            fileArr: this.state.fileArr,
            removeOne: this.removeOneImg,
            onSortFiles: this.onSortFiles
        }
        return (
            <div className='add-music-sheet'>
                <div className='drag-container'
                    draggable={true}
                    onDragOver={this.handleDragEnd}
                    onDragEnd={this.handleDragEnd}
                    onDrop={this.handleDrop}
                    onDragEnter={this.handleDragEnd}
                    onDragLeave={this.handleDragEnd}
                    >
                    <div className='add-label'>
                        <SvgIcon iconClass='icon-Add'/>拖放文件到此处
                    </div>
                    <DragAddContext.Provider value={contextValue}>
                        <DragFileGrid/>
                    </DragAddContext.Provider>
                    <div className="add-to-store">
                        <Button type='default' onClick={this.addToStore}>保存</Button>
                    </div>
                </div>
                <Modal
                    title="请填写名称"
                    visible={this.state.nameDialogVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input placeholder='请输入曲谱名称' onInput={this.handleInputName} defaultValue={this.state.fileArr[0] && this.state.fileArr[0].name}/>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAddFile)