import React from 'react'
import PropTypes from 'prop-types'
import { Input, Popover } from 'antd'
import Preview from './preview'
import request from '@/utils/request'
import CONFIG from '@/config'
import './index.less'

const Search = Input.Search
class SearchImg extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            imgList: [],
            hiddenResult: true
        }
    }
    search = (keyword) => {
        let url = CONFIG.API.searchImg
        let params = {
            title: keyword
        }
        request.get(url, params).then(res => {
            this.setState({
                imgList: res.data,
                hiddenResult: false
            })
        })
    }
    handleBlur = () => {
        this.setState({
            hiddenResult: true
        })
    }
    handleFocus = () => {
        this.setState({
            hiddenResult: this.state.imgList.length > 0 ? false : true
        })
    }
    imgAdd = (e, img) => {
        e.stopPropagation()
        if (this.props.addImg) {
            this.props.addImg(img)
        }
    }
    render () {
        let { imgList, hiddenResult } = this.state
        return (
            <div className='search-img-container'>
                <div className='search-img-container_input'>
                    <Search placeholder='输入关键词以搜索图片' onSearch={this.search} onFocus={this.handleFocus}/>
                </div>
                <div className={hiddenResult ? 'search-img-container_display hidden' : 'search-img-container_display'}
                    onMouseLeave={this.handleBlur}
                >
                    {imgList.map((item, index) => {
                        return (
                            <div key={index} className='search-img-container_display-item'>
                                <Popover title="" className='img-preview' content={<Preview src={item.src}/>} trigger='hover' placement='leftBottom'>
                                    <img src={item.src}/>
                                </Popover>
                                <span className='img-title'>
                                    {item.name}
                                </span>
                                <span className='img-add-btn' onClick={(e) => this.imgAdd(e, item)}>
                                    添加
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

SearchImg.defaultProps = {
    addImg: () => {}
}

SearchImg.propTypes = {
    addImg: PropTypes.func
}

export default SearchImg