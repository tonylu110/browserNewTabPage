import React, { Component } from 'react'
import MainArea from '../MainArea/MainArea'
import One from '../One/One'
import TarRequest from '../../util/TarRequest/TarRequest.js'
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
      backgroundHeight: backgroundHeight,
      one: {}
    }
  }
  render() {
    return (
      <div className='background' style={{backgroundImage: this.state.background, height: this.state.backgroundHeight}}>
        <MainArea />
        <One oneMain={this.state.one} />
      </div>
    )
  }
  componentDidMount() {
    TarRequest('GET', 'https://v1.hitokoto.cn/', null, (res) => {
      this.setState({
        one: res
      })
    })
  }
}
