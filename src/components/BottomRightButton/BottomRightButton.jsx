import React, { Component } from 'react'
import InfoWindow from '../InfoWindow/InfoWindow'
import './BottomRightButton.css'

export default class BottomRightButton extends Component {
  state = {
    infoWindowShow: false
  }
  render() {
    return (
      <>
        <div className='bottom_right_button'>
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
  clickBlackBack() {
    this.setState({
      infoWindowShow: false
    })
  }
}
