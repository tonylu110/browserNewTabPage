import React, { Component } from 'react'
import './InfoWindow.css'

export default class InfoWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoWindowShow: false,
    }
  }
  render() {
    var screenwidth = window.innerWidth
    var screenHeight = document.documentElement.clientHeight
    return (
      <div className='info_window' style={{
        transform: this.state.infoWindowShow ? 'scale(1, 1)' : '',
        right: this.state.infoWindowShow ? ((screenwidth - 850) / 2) + 'px' : '-445px',
        bottom: this.state.infoWindowShow ? ((screenHeight - 600) / 2) + 'px' : '-300px',
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
    return null;
  }
}
