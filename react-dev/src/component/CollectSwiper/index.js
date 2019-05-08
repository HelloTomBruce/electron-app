import React from 'react'
import { Carousel } from 'antd'
import './index.less'

class CollectSwiper extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            collectList: []
        }
    }
    componentDidMount () {
        this.setState({
            collectList: [
                {
                    collect: [
                        {
                            id: 1
                        },
                        {
                            id: 1
                        },
                        {
                            id: 1
                        },
                        {
                            id: 1
                        }
                    ]
                },
                {
                    collect: [
                        {
                            id: 1
                        },
                        {
                            id: 1
                        },
                        {
                            id: 1
                        },
                        {
                            id: 1
                        }
                    ]
                },
                {
                    collect: [
                        {
                            id: 1
                        },
                        {
                            id: 1
                        },
                        {
                            id: 1
                        },
                        {
                            id: 1
                        }
                    ]
                },
                {
                    collect: [
                        {
                            id: 1
                        },
                        {
                            id: 1
                        },
                        {
                            id: 1
                        },
                        {
                            id: 1
                        }
                    ]
                }
            ]
        })
    }
    render () {
        return (
            <div className='collect-container'>
                <Carousel effect="fade" autoplay={true}>
                    {this.state.collectList.map((item, index) => {
                        return (
                            <div key={index} className='collect-swiper-item'>
                                {item.collect.map((cell, index) => {
                                    return (
                                        <div key={index} className='collect-swiper-item-cell'>
                                            <img src='https://picsum.photos/400/700/?random'/>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}

export default CollectSwiper