import React, { Component } from 'react'
import MainArea from '../MainArea/MainArea'
import One from '../One/One'
import FeaButton from '../FeaButton/FeaButton'
import TarRequest from '../../util/TarRequest/TarRequest.js'
import './Background.css'

export default class Background extends Component {
  constructor(props) {
    super(props)
    var screenHeight = document.documentElement.clientHeight;
    var screenwidth = window.innerWidth
    var backgroundImage = 'url(https://iw233.cn/api.php?sort=pc)'
    var backgroundHeight = ''
    var hideAll = localStorage.getItem('hideAll')
    var isMobile = false
    if (hideAll === null) {
      hideAll = false
    } else if (hideAll === 'true') {
      hideAll = true
    } else {
      hideAll = false
    }
    if (screenwidth < 768) {
      backgroundImage = 'url(https://iw233.cn/api.php?sort=mp)'
      backgroundHeight = screenHeight + 'px'
      isMobile = true
    }
    this.state = {
      background: backgroundImage,
      backgroundHeight: backgroundHeight,
      one: {},
      hideAll: hideAll,
      useCalculator: false,
      backgroundShow: 'none',
      isMobile: isMobile
    }
  }
  render() {
    var img = document.createElement('img')
    img.src = (this.state.isMobile ? 'https://iw233.cn/api.php?sort=mp' : 'https://iw233.cn/api.php?sort=pc')
    img.onload = () => {
       this.setState({
          backgroundShow: ''
       }) 
    }
    return (
      <div className='background' style={{backgroundImage: this.state.background, height: this.state.backgroundHeight, display: this.state.backgroundShow}}>
        {this.state.useCalculator ? null : <MainArea hideAll={this.state.hideAll} />}
        {this.state.hideAll || this.state.useCalculator ? null : <One oneMain={this.state.one} />}
        <FeaButton hideAll={(e) => {
          this.setState({
            hideAll: e
          })
        }} useCalculator={
          (e) => {
            this.setState({
              useCalculator: e
            })
          }
        } />
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
