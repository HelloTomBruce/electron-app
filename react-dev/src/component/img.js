import React from 'react'
import { connect } from 'react-redux'

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
        console.log(this.props.match.params)
        return (
            <div>
                {this.props.list[this.state.index].fileArr.map((item, index) => {
                    return (
                        <img src={item.path} key={index}/>
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