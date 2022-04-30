import React, { Component } from 'react'
import './MoreSearch.css'

export default class MoreSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moreSearchShow: false,
      mOpacity: '0',
      mZIndex: '3',
      moreSearch: ''
    }
  }
  render() {
    return (
      <div className={'more_search' + this.state.moreSearch} style={{ opacity: this.state.mOpacity, zIndex: this.state.mZIndex }}>
        <div className="search_engines">
          <div onClick={() => this.clickSearchImg(false, 'cus', 'img/search.png')}>
            <img src="img/search.png" alt='' />
          </div>
          <div onClick={() => this.clickSearchImg(false, 'google', 'img/google.png')}>
            <img src="img/google.png" alt='' />
          </div>
          <div onClick={() => this.clickSearchImg(false, 'bing', 'img/bing-logo.png')} style={{ padding: '15px', width: '70px', height: '70px' }}>
            <img src="img/bing-logo.png" style={{ width: '70px', height: '70px' }} alt="" />
          </div>
          <div onClick={() => this.clickSearchImg(false, 'baidu', 'img/baidu.png')} style={{ padding: '20px', height: '60px', width: '60px' }}>
            <img src="img/baidu.png" style={{ width: '60px', height: '60px' }} alt="" />
          </div>
          <div onClick={() => this.clickSearchImg(false, 'ddg', 'img/ddg.svg')} style={{ display: 'none' }}>
            <img src="img/ddg.svg" alt='' />
          </div>
          <div onClick={() => this.clickSearchImg(false, 'yandex', 'img/yandex.png')} style={{ display: 'none' }}>
            <img src="img/yandex.png" alt='' />
          </div>
          <div onClick={() => this.clickSearchImg(false, 'sougou', 'img/sougou.png')} style={{ display: 'none' }}>
            <img src="img/sougou.png" alt='' />
          </div>
        </div>
      </div>
    )
  }
  clickSearchImg(moreSearchShow, searchEngine, searchEngineImg) {
    this.props.event({
      moreSearchShow: moreSearchShow,
      searchEngine: searchEngine,
      searchEngineImg: searchEngineImg
    })
    this.setState({
      mOpacity: '0',
      mZIndex: '3',
      moreSearch: '',
      moreSearchShow: moreSearchShow
    })
  }
  static getDerivedStateFromProps(props) {
    if (props.moreSearchShow !== null) {
      var mOpacity
      var mZIndex
      var moreSearch
      if (!props.moreSearchShow) {
        mOpacity = '0'
        mZIndex = '3'
        moreSearch = ''
      } else {
        mOpacity = ''
        mZIndex = ''
        moreSearch = ' more_search_show'
      }
      return {
        mOpacity: mOpacity,
        mZIndex: mZIndex,
        moreSearch: moreSearch
      };
    }
    return null;
  }
}