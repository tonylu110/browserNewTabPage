import React, { Component } from 'react'
import GetIsMobile from '../../util/GetIsMobile/GetIsMobile'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    var screenwidth = window.innerWidth
    var searchBarWidth = ''
    if (screenwidth < 768) {
      searchBarWidth = '324px'
    }
    this.state = {
      searchBarWidth: searchBarWidth,
      moreSearchShow: true,
      searchEngine: 'google',
      searchEngineImg: 'img/google.png',
      keyword: '',
      searchBtnShow: {
        keywordsRight: 'none',
        searchBtn: ''
      }
    }
  }
  render() {
    return (
      <div className='search_bar' style={{width: this.state.searchBarWidth}}>
        <img alt='' src={this.state.searchEngineImg} onClick={() => {this.clickSearchImg(this.state.moreSearchShow)}} />
        <input type="text" onKeyUp={this.searchKeyword} />
        <div className="keywords_right" style={{display: this.state.searchBtnShow.keywordsRight}}></div>
        <div className="search_btn" onClick={() => this.toSearch(this.state.searchEngine)} style={{width: this.state.searchBtnShow.searchBtn}}>搜索</div>
      </div>
    )
  }
  clickSearchImg(moreSearchShow) {
    this.props.event(!moreSearchShow)
    this.setState({
      moreSearchShow: !moreSearchShow
    })
  }
  searchKeyword = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        searchBtnShow: {
          keywordsRight: '',
          searchBtn: '45px'
        }
      })
    } else {
      this.setState({
        searchBtnShow: {
          keywordsRight: 'none',
          searchBtn: ''
        }
      })
    }
    this.setState({
      keyword: e.target.value
    })
    if (e.keyCode === 13) {
      this.toSearch(this.state.searchEngine)
    }
  }
  toSearch(searchEngine) {
    switch (searchEngine) {
      case 'google':
        return window.open('https://www.google.com/search?q=' + this.state.keyword, '_self')
      case 'bing':
        return window.open('https://cn.bing.com/search?q=' + this.state.keyword, '_self')
      case 'baidu':
        return window.open('https://www.baidu.com/s?wd=' + this.state.keyword, '_self')
      case 'ddg':
        return window.open('https://duckduckgo.com/?q=' + this.state.keyword, '_self')
      case 'yandex':
        return window.open('https://yandex.com/search/?text=' + this.state.keyword, '_self')
      case 'sogou':
        return window.open('https://www.sogou.com/web?query=' + this.state.keyword, '_self')
      default:
        return null
    }
  }
  static getDerivedStateFromProps(props) {
    if (props.moreSearchShow !== null) {
      return {
        moreSearchShow: props.moreSearchShow,
        searchEngine: props.searchEngine,
        searchEngineImg: props.searchEngineImg
      };
    }
    return null;
  }
  componentDidMount() {
    GetIsMobile((e) => {
      var searchBarWidth
      if (e) {
        searchBarWidth = '324px'
      } else {
        searchBarWidth = ''
      }
      this.setState({
        searchBarWidth: searchBarWidth
      })
    })
  }
}