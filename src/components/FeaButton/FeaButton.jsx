import React, { Component } from 'react'
import TopRightButton from '../TopRightButton/TopRightButton'
import BottomButtone from '../BottomButton/BottomButton'
import BottomRightButton from '../BottomRightButton/BottomRightButton'
import TopButton from '../TopButton/TopButton'
import './FeaButton.css'

export default class FeaButton extends Component {
  constructor(props) {
    super(props)
    var hideAll = localStorage.getItem('hideAll')
    var ScreenWidth = window.innerWidth
    var isMobile = false
    if (hideAll === null) {
      hideAll = false
    } else if (hideAll === 'true') {
      hideAll = true
    } else {
      hideAll = false
    }
    if (ScreenWidth < 768) {
      isMobile = true
    }
    this.state = {
      hideAll: hideAll,
      isMobile: isMobile
    }
  }
  render() {
    return (
      <>
        {this.state.isMobile ? (
          <>
            <BottomButtone hideAll={(e) => this.hideAll(e)} />
            {this.state.hideAll ? null : <TopButton />}
          </>
        ) : (
          <>
            <TopRightButton hideAll={(e) => this.hideAll(e)} />
            {this.state.hideAll ? null : <BottomRightButton />}
          </>
        )}
      </>
    )
  }
  hideAll(e) {
    this.setState({
      hideAll: e
    })
    this.props.hideAll(e)
  }
}
