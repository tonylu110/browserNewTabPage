import React, { Component } from 'react'
import TopRightButton from '../TopRightButton/TopRightButton'
import BottomButtone from '../BottomButton/BottomButton'
import BottomRightButton from '../BottomRightButton/BottomRightButton'
import TopButton from '../TopButton/TopButton'
import TopLeftButton from '../TopLeftButton/TopLeftButton'
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
      mobileShowButton: true,
      calculatorShow: false
    }
  }
  render() {
    return (
      <>
        {this.state.isMobile ? (
          <>
            {this.state.mobileShowButton ? <BottomButtone hideAll={(e) => this.hideAll(e)} useCalculator={
              (e) => {
                this.setState({
                  calculatorShow: e
                })
                this.props.useCalculator(e)
              }
            }/> : null}
            {this.state.hideAll || this.state.calculatorShow ? null : <TopButton />}
          </>
        ) : (
          <>
            <TopRightButton hideAll={(e) => this.hideAll(e)} useCalculator={
              (e) => {
                this.setState({
                  calculatorShow: e
                })
                this.props.useCalculator(e)
              }
            } />
            {this.state.hideAll || this.state.calculatorShow ? null : <BottomRightButton />}
          </>
        )}
        {this.state.hideAll || this.state.calculatorShow ? null : <TopLeftButton />}
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