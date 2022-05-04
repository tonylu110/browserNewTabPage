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
        right: this.state.infoWindowShow ? ((screenwidth - 800) / 2) + 'px' : '-445px',
        bottom: this.state.infoWindowShow ? ((screenHeight - 600) / 2) + 'px' : '-300px',
      }}>
        <div className='close_button' onClick={() => this.clickCloseButton()}>
          <img src="img/close.png" alt='' />
        </div>
        <div className='info_inner'>
          <div className='info_title'>
            <span>关于 uyou 新标签页</span>
            <img src="logo512.png" alt="" />
          </div>
          <div className='info_main'>
            <div className="info_text">
              这是基于 uyou 新标签页 chrome 扩展的网页版，她会让你感觉到和 chrome 扩展版几乎一样的体验，也可以让暂未支持的浏览器作为主页使用
            </div>
            <div className="info_text">
              <div>这个新标签页的开源地址为：</div>
              <a href="https://github.com/tonylu110/browserNewTabPage" target="view_window">点击前往</a>
              <div style={{ marginTop: '15px' }}>如果你感兴趣也可以去这个项目的扩展版上给我一个 star，此标签页扩展的开源地址为：</div>
              <a href="https://github.com/tonylu110/uyouNewTab" target="view_window">点击前往</a>
            </div>
            <div className="info_text">
              <div>我的 GitHub 地址：</div>
              <a href="https://github.com/tonylu110" target="view_window">点击前往</a>
              <div className='mine_info'>
                <div style={{ marginRight: '20px' }}>
                  <div style={{ marginTop: '10px' }}>我的 酷安 账号：</div>
                  <img src="img/coolapk.png" alt='' />
                  <a href="http://www.coolapk.com/u/1126752" target="view_window">点击前往</a>
                </div>
                <div>
                  <div style={{ marginTop: '10px' }}>欢迎加群讨论：</div>
                  <img src="img/qq.jpg" alt='' />
                  <a href="https://jq.qq.com/?_wv=1027&amp;k=B8k42CI9" target="view_window">点击前往</a>
                </div>
              </div>
            </div>
          </div>
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
