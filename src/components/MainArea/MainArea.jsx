import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import LinkArea from '../LinkArea/LinkArea'
import MoreSearch from '../MoreSearch/MoreSearch'
import './MainArea.css'

export default class MainArea extends Component {
  state = {
    moreSearchShow: false,
    searchEngine: 'google',
    searchEngineImg: 'img/google.png'
  }
  render() {
    return (
      <div className='MainArea'>
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
        <LinkArea />
      </div>
    )
  }
}
