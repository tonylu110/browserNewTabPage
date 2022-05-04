import React, { Component } from 'react'
import InfoMobileWindow from '../InfoMobileWindow/InfoMobileWindow'
import './TopButton.css'

export default class TopButton extends Component {
  state = {
    infoWindowShow: false
  }
  render() {
    return (
      <>
        <div className='top_right_button'>
          <div className='tr_button' onClick={() => this.showInfoWindow()}>
            <img src="img/info.png" alt="" />
          </div>
        </div>
        <InfoMobileWindow infoWindowShow={this.state.infoWindowShow} event={
          (e) => {
            this.setState({
              infoWindowShow: e
            })
          }
        }/>
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
