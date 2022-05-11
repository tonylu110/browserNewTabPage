import React, { Component } from 'react'
import GetIsMobile from '../../util/GetIsMobile/GetIsMobile'
import './OneWindow.css'

export default class OneWindow extends Component {
  constructor(props) {
    super(props)
    var screenwidth = window.innerWidth
    var oneMainWidth = ''
    var oneMainHeight = ''
    var oneMainPadding = ''
    var oneMainFontSize = ''
    var oneMainBottm = '-170px'
    if (screenwidth < 768) {
      oneMainWidth = '270px'
      oneMainHeight = '400px'
      oneMainPadding = '40px'
      oneMainFontSize = '30px'
      oneMainBottm = '-50vh'
    }
    this.state = {
      oneMain: {},
      oneMainShow: false,
      oneMainWidth: oneMainWidth,
      oneMainHeight: oneMainHeight,
      oneMainPadding: oneMainPadding,
      oneMainFontSize: oneMainFontSize,
      oneMainBottm: oneMainBottm
    }
  }
  render() {
    var screenHeight = document.documentElement.clientHeight
    return (
      <div className='one_main' style={{
        bottom: (this.state.oneMainShow ? ((screenHeight - 402) / 2) + 'px' : this.state.oneMainBottm),
        transform: (this.state.oneMainShow ? 'scale(1, 1)' : 'scale(0, 0)'),
        width: this.state.oneMainWidth,
        height: this.state.oneMainHeight,
        padding: this.state.oneMainPadding
      }}>
        <div className='close_button' onClick={() => this.clickCloseButton()}>
          <img src="img/close.png" alt='' />
        </div>
        <div className='one_main_info'>
          <span className='one_num' style={{ fontSize: this.state.oneMainFontSize }}>#{this.state.oneMain.id}</span>
          <span className='one_text' style={{ fontSize: this.state.oneMainFontSize }}>{this.state.oneMain.hitokoto}</span>
          <span className='one_from' style={{ fontSize: this.state.oneMainFontSize }}>———{this.state.oneMain.from}</span>
        </div>
      </div>
    )
  }
  clickCloseButton() {
    this.props.event({
      oneMainShow: false,
      blackBackShow: ''
    })
  }
  static getDerivedStateFromProps(props) {
    if (props.oneMain !== null) {
      return {
        oneMain: props.oneMain,
        oneMainShow: props.oneMainShow
      }
    }
    return null;
  }
  componentDidMount() {
    GetIsMobile((e) => {
      var oneMainWidth
      var oneMainHeight
      var oneMainPadding
      var oneMainFontSize
      var oneMainBottm
      if (e) {
        oneMainWidth = '270px'
        oneMainHeight = '400px'
        oneMainPadding = '40px'
        oneMainFontSize = '30px'
        oneMainBottm = '-50vh'
      } else {
        oneMainWidth = ''
        oneMainHeight = ''
        oneMainPadding = ''
        oneMainFontSize = ''
        oneMainBottm = '-170px'
      }
      this.setState({
        oneMainWidth: oneMainWidth,
        oneMainHeight: oneMainHeight,
        oneMainPadding: oneMainPadding,
        oneMainFontSize: oneMainFontSize, 
        oneMainBottm: oneMainBottm
      })
    })
  }
}
