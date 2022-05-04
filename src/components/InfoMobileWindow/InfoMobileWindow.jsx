import React, { Component } from 'react'
import './InfoMobileWindow.css'

export default class InfoMobileWindow extends Component {
  state = {
    infoWindowShow: false
  }
  render() {
    var screenHeight = document.documentElement.clientHeight
    return (
      <div className='info_mobile_window' style={{
        transform: this.state.infoWindowShow ? 'scale(1, 1)' : '',
        top: this.state.infoWindowShow ? ((screenHeight - 480) / 2) + 'px' : '-50vh',
      }}>
        <div className='close_button' onClick={() => this.clickCloseButton()}>
          <img src="img/close.png" alt='' />
        </div>
      </div>
    )
  }
  clickCloseButton() {
    this.props.event(false)
  }
  static getDerivedStateFromProps(props) {
    if (props.infoWindowShow !== null) {
      return {
        infoWindowShow: props.infoWindowShow,
      }
    }
  }
}
