import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import LinkArea from '../LinkArea/LinkArea'
import MoreSearch from '../MoreSearch/MoreSearch'
import './MainArea.css'
import GetIsMobile from '../../util/GetIsMobile/GetIsMobile'

export default class MainArea extends Component {
  constructor(props) {
    super(props)
    var searchEngine =  localStorage.getItem('searchEngine')
    var searchEngineImg = localStorage.getItem('searchEngineImg')
    var screenwidth = window.innerWidth
    var mainAreaTopHeight = ''
    if (searchEngine === null) {
      searchEngine = 'google'
      searchEngineImg = 'img/google.png'
    }
    if (screenwidth < 768) {
      mainAreaTopHeight = '-200px'
    }
    this.state = {
      moreSearchShow: false,
      searchEngine: searchEngine,
      searchEngineImg: searchEngineImg,
      mainAreaTopHeight: mainAreaTopHeight,
      hideAll: false
    }
  }
  render() {
    return (
      <div className='MainArea' style={{marginTop: this.state.mainAreaTopHeight}}>
        <SearchBar moreSearchShow={this.state.moreSearchShow} searchEngine={this.state.searchEngine} searchEngineImg={this.state.searchEngineImg} event ={
          (e) => {
            this.setState({
              moreSearchShow: e
            })
          }
        } />
        <MoreSearch moreSearchShow={this.state.moreSearchShow} event = {
          (e) => {
            this.setState({
              moreSearchShow: e.moreSearchShow,
              searchEngine: e.searchEngine,
              searchEngineImg: e.searchEngineImg
            })
          }
        } />
        {this.state.hideAll ? null : <LinkArea />}
      </div>
    )
  }
  componentDidMount() {
    GetIsMobile((e) => {
      var marginTop
      if (e) {
        marginTop = '-200px'
      } else {
        marginTop = ''
      }
      this.setState({
        mainAreaTopHeight: marginTop
      })
    })
  }
  static getDerivedStateFromProps(props) {
    if (props.hideAll !== null) {
      return {
        hideAll: props.hideAll
      };
    }
    return null;
  }
}
