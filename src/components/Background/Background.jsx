import React, { Component } from 'react'
import MainArea from '../MainArea/MainArea'
import './Background.css'

export default class Background extends Component {
  render() {
    return (
      <div className='background' style={{backgroundImage: 'url(https://iw233.cn/api.php?sort=pc)'}}>
        <MainArea />
      </div>
    )
  }
}
