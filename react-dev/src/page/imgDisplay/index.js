import React from 'react'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import '@/page-less/imgDisplay.less'

const mapStateToProps = state => {
    return {
        list: state.musicSheet.list
    }
}
class ImgDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    componentDidMount () {
        this.setState({
            index: this.props.match.params.id
        })
    }
    renderImgList = () => {
        if (!this.props.list[this.state.index]) {
            return null
        }
        return (
            <div className='img-display-container'>
                {this.props.list[this.state.index].fileArr.map((item, index) => {
                    return (
                        <Draggable
                            axis="both"
                            handle='.img-one'
                            scale={1}
                            bounds="parent"
                        >
                            <img className='img-one' src={item.path} key={index}/>
                        </Draggable>
                    )
                })}
            </div>
        )
    }
    render () {
        return (
            <div>
                {this.renderImgList()}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ImgDisplay)