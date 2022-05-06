import React, { Component } from 'react'
import TarRequest from '../../util/TarRequest/TarRequest'
import './TopLeftButton.css'

export default class TopLeftButton extends Component {
  state = {
    weatherImg: '',
    showWeaherButton: true,
    weatherImgShow: false
  }
  render() {
    return (
      <>
        {this.state.showWeaherButton ? (
          <div className='top_left_button'>
            <div className='tl_button' onClick={() => this.showWeatherWindow()}>
              {this.state.weatherImgShow ? <img src={this.state.weatherImg} alt="" /> : null}
            </div>
          </div>
        ) : null}
      </>
    )
  }
  showWeatherWindow() {
    this.setState({
      showWeaherButton: false
    })
  }
  componentDidMount() {
    TarRequest('GET', "http://mark.tnyl.xyz/weather/weather/baidu", {
      city: '北京'
    }, (res) => {
      var weatherImg
      if (res.weather[0].weather.search("多云") !== -1) {
        weatherImg = 'img/weather/00.png'
      } else if (res.weather[0].weather.search("晴") !== -1) {
        weatherImg = 'img/weather/01.png'
      } else if (res.weather[0].weather.search("阴") !== -1) {
        weatherImg = 'img/weather/02.png'
      } else if (res.weather[0].weather.search("雪") !== -1) {
        weatherImg = 'img/weather/03.png'
      } else if (res.weather[0].weather.search("雨") !== -1) {
        weatherImg = 'img/weather/04.png'
      } else {
        weatherImg = 'img/dLinkIcon.png'
      }
      this.setState({
        weatherImg: weatherImg,
        weatherImgShow: true
      })
    })
  }
}
