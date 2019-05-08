import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { initList } from '@/redux/action/musicSheet'
import { getLocalItem } from '@/redux/local'
import SvgIcon from '@/component/SvgIcon'
import './index.less'

const defaultList = [
    {
        name: '示例',
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
        ]
    },
    {
        name: '示例',
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
        ]
    },
    {
        name: '示例',
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
        ]
    },
    {
        name: '示例',
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
        ]
    },
    {
        name: '示例',
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
        ]
    },
    {
        name: '示例',
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
        ]
    },
    {
        name: '示例',
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
        ]
    },
    {
        name: '示例',
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
        ]
    }
]

const mapStateToProps = state => {
    return {
        list: state.musicSheet.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initList: (list) => dispatch(initList(list))
    }
}
class LeftList extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount () {
        let list = JSON.parse(getLocalItem('musicSheet'))
        if (list.length === 0) {
            list = defaultList
        }
        this.props.initList(list)
    }
    render () {
        return (
            <div className='sheet-music-list' style={{display: this.props.hidden ? 'none' : 'block'}}>
                {this.props.list.map((item, index) => {
                    return (
                        <div className='sheet-music-one' key={index}>
                            <Link to={`/view/${index}`}>
                            <SvgIcon iconClass='icon-gedan'/>
                            {item.name}</Link>
                        </div>
                    )
                })}
                <div className='add-sheet-music'>
                    <Link to='/'>
                        <SvgIcon iconClass='icon-Add'/>添加
                    </Link>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftList)