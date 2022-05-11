import React, { Component } from 'react'
import InfoWindow from '../InfoWindow/InfoWindow'
import './BottomRightButton.css'

export default class BottomRightButton extends Component {
  state = {
    infoWindowShow: false,
    backgroundImage: ''
  }
  render() {
    return (
      <>
        <div className='bottom_right_button'>
          <div className='br_button' onClick={() => this.downPic()}>
            <img src="img/down.png" alt="" />
          </div>
          <div className='br_button' onClick={() => this.showInfoWindow()}>
            <img src="img/info.png" alt="" />
          </div>
        </div>
        <InfoWindow infoWindowShow={this.state.infoWindowShow} event={
          (e) => {
            this.setState({
              infoWindowShow: e
            })
          }
        } />
        <div className='black_back'
          style={{ zIndex: this.state.infoWindowShow ? '12' : '-1' }}
          onClick={() => this.clickBlackBack()}></div>
      </>
    )
  }
  showInfoWindow() {
    this.setState({
      infoWindowShow: true
    })
  }
  downPic() {
    /* Open new window and
    download the image. */
    var fileName = 'pic-' + Date.now() + '.png'
    var img = document.createElement('a')
    img.setAttribute('href', this.state.backgroundImage)
    img.setAttribute('download', fileName)
    img.click()
  }
  clickBlackBack() {
    this.setState({
      infoWindowShow: false
    })
  }
  static getDerivedStateFromProps(props) {
    return {
      backgroundImage: props.backgroundImage,
    }
  }
}
