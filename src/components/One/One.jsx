import React, { Component } from 'react'
import OneWindow from '../OneWindow/OneWindow'
import './One.css'

export default class One extends Component {
  constructor(props) {
    var screenwidth = window.innerWidth
    var oneButtonWidth = ''
    if (screenwidth < 768) {
      oneButtonWidth = '280px'
    }
    super(props)
    this.state = {
      oneMain: {},
      oneButtonHeight: '',
      oneButtonWidth: oneButtonWidth,
      oneMainShow: false,
      blackBackShow: '',
      mobileShowButton: true
    }
  }
  render() {
    return (
      <>
        {this.state.mobileShowButton ? (
          <div className='one_button' style={{ marginBottom: this.state.oneButtonHeight, maxWidth: this.state.oneButtonWidth }} onClick={() => this.clickOneButton()}>
            <span style={{ maxWidth: this.state.oneButtonWidth }}>{this.state.oneMain.hitokoto}</span>
          </div>
        ) : null}
        <OneWindow oneMain={this.state.oneMain} oneMainShow={this.state.oneMainShow} event={
          (e) => {
            this.setState({
              oneMainShow: e.oneMainShow,
              blackBackShow: e.blackBackShow
            })
          }
        } />
        <div className='black_back' style={{ zIndex: this.state.blackBackShow }} onClick={() => this.clickBlackBack()}></div>
      </>
    )
  }
  clickOneButton() {
    this.setState({
      oneMainShow: true,
      blackBackShow: '20'
    })
  }
  clickBlackBack() {
    this.setState({
      oneMainShow: false,
      blackBackShow: ''
    })
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
  static getDerivedStateFromProps(props) {
    var screenwidth = window.innerWidth
    var oneButtonTopHeight = '20px'
    if (screenwidth < 768) {
      oneButtonTopHeight = '20vh'
    }
    if (props.oneMain !== null && props.oneMain.hitokoto !== undefined) {
      return {
        oneMain: props.oneMain,
        oneButtonHeight: oneButtonTopHeight
      }
    }
    return null;
  }
}
