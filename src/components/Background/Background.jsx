import React, { Component } from 'react'
import MainArea from '../MainArea/MainArea'
import './Background.css'

export default class Background extends Component {
  constructor(props) {
    super(props)
    var screenHeight = document.documentElement.clientHeight;
    var screenwidth = window.innerWidth
    var backgroundImage = 'url(https://iw233.cn/api.php?sort=pc)'
    var backgroundHeight = ''
    if (screenwidth < 768) {
      backgroundImage = 'url(https://iw233.cn/api.php?sort=mp)'
      backgroundHeight = screenHeight + 'px'
    }
    this.state = {
      background: backgroundImage,
      backgroundHeight: backgroundHeight
    }
  }
  render() {
    return (
      <div className='background' style={{backgroundImage: this.state.background, height: this.state.backgroundHeight}}>
        <MainArea />
      </div>
    )
  }
}
