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
      isMobile: isMobile,
      mobileShowButton: true
    }
  }
  render() {
    return (
      <>
        {this.state.isMobile ? (
          <>
            {this.state.mobileShowButton ? <BottomButtone hideAll={(e) => this.hideAll(e)} /> : null}
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
  componentDidMount() {
    const originHeight = document.documentElement.clientHeight || document.body.clientHeight;
    this.resizeHandler = () => {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const activeElement = document.activeElement;
      if (resizeHeight < originHeight) {
        if (activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")) {
          this.setState({
            mobileShowButton: false
          })
        }
      } else {
        this.setState({
          mobileShowButton: true
        })
      }
    }
    window.addEventListener('resize', this.resizeHandler);
  }
  hideAll(e) {
    this.setState({
      hideAll: e
    })
    this.props.hideAll(e)
  }
}