import React from 'react'
import { connect } from 'react-redux'
import { addOne } from '@/redux/action/musicSheet'
import { message } from 'antd'
import SvgIcon from '@/component/SvgIcon'
import { DragAddContext } from './context'
import DragFileGrid from './dragFileGrid'
import './dragAdd.less'

const mapStateToProps = () => ({})

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
        }
    }
    componentDidMount () {
        this.setState({
            name: this.state.fileArr[0].name
        })
    }
    handleInput = (e) => {
        this.setState({
            name: e.target.value
        })
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
    addToStore = () => {
        if (this.state.fileArr.length <= 0) {
            message.warn('请先添加文件')
            return
        }
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
    removeOneImg = (e, index) => {
        e.preventDefault()
        let fileArr = [...this.state.fileArr]
        fileArr.splice(index, 1)
        this.setState({
            fileArr
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
                <input type="text" defaultValue={this.state.name} onInput={this.handleInput} className='name-input'/>
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
                        <div className="add-to-store" onClick={this.addToStore}>
                            <SvgIcon iconClass='icon-sure'/>
                        </div>
                    </DragAddContext.Provider>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAddFile)