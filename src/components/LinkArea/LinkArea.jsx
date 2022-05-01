import React, { Component } from 'react'
import './LinkArea.css'

export default class LinkArea extends Component {
  constructor(props) {
    super(props)
    var screenwidth = window.innerWidth
    var isMobile = false
    if (screenwidth < 768) {
      isMobile = true
    }
    this.state = {
      isMobile: isMobile,
      links: {
        link1: 'https://www.google.com',
        link2: 'https://www.youtube.com',
        link3: 'https://cn.bing.com',
        link4: 'https://www.baidu.com',
        link5: 'https://www.bilibili.com',
        link6: 'https://www.ithome.com',
        link7: 'https://chrome.google.com/webstore/category/extensions',
        link8: 'https://www.aliyun.com',
        link9: 'https://azure.microsoft.com/zh-cn/',
        link10: 'https://www.github.com'
      }
    }
  }
  render() {
    return (
      <div className="link_area" style={{width: (this.state.isMobile ? '366px' : '')}}>
        <div onClick={() => this.openLink('1')}>
          <div>
            <img src="img/google.png" alt="" />
          </div>
        </div>
        <div onClick={() => this.openLink('2')}>
          <div>
            <img src="img/youtube.png" alt="" />
          </div>
        </div>
        <div onClick={() => this.openLink('3')}>
          <div style={{ padding: '15px', width: '70px', height: '70px' }}>
            <img src="img/bing-logo.png" alt="" />
          </div>
        </div>
        <div onClick={() => this.openLink('4')}>
          <div style={{ padding: '20px', height: '60px', width: '60px' }}>
            <img src="img/baidu.png" alt="" />
          </div>
        </div>
        <div onClick={() => this.openLink('5')}>
          <div style={{ padding: '15px', width: '70px', height: '70px' }}>
            <img src="img/icon_bilibili-circle.png" alt="" />
          </div>
        </div>
        {this.state.isMobile ? null : (
          <>
            <div onClick={() => this.openLink('6')}>
              <div style={{ padding: '10px', width: '80px', height: '80px' }}>
                <img src="img/IThome.png" alt="" />
              </div>
            </div>
            <div onClick={() => this.openLink('7')}>
              <div>
                <img src="img/Chrome_Web_Store_logo_2012-2015.svg.png" alt="" />
              </div>
            </div>
            <div onClick={() => this.openLink('8')}>
              <div style={{ padding: '20px', height: '60px', width: '60px' }}>
                <img src="img/aliyun.png" alt="" />
              </div>
            </div>
            <div onClick={() => this.openLink('9')}>
              <div>
                <img src="img/azure-blue.png" alt="" />
              </div>
            </div>
          </>
        )}
        <div onClick={() => this.openLink('10')}>
          <div>
            <img src="img/GitHub.png" alt="" />
          </div>
        </div>
      </div>
    )
  }
  openLink(link) {
    switch (link) {
      case '1':
        return window.open(this.state.links.link1, '_self')
      case '2':
        return window.open(this.state.links.link2, '_self')
      case '3':
        return window.open(this.state.links.link3, '_self')
      case '4':
        return window.open(this.state.links.link4, '_self')
      case '5':
        return window.open(this.state.links.link5, '_self')
      case '6':
        return window.open(this.state.links.link6, '_self')
      case '7':
        return window.open(this.state.links.link7, '_self')
      case '8':
        return window.open(this.state.links.link8, '_self')
      case '9':
        return window.open(this.state.links.link9, '_self')
      case '10':
        return window.open(this.state.links.link10, '_self')
      default:
        return null
    }
  }
}
