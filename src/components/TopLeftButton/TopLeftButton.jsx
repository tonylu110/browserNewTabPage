import React, { Component } from 'react'
import TarRequest from '../../util/TarRequest/TarRequest'
import WeatherWindow from '../WeatherWindow/WeatherWindow'
import './TopLeftButton.css'

export default class TopLeftButton extends Component {
  constructor(props) {
    super(props)
    var city = localStorage.getItem('city')
    if (city === null) {
      city = '北京'
    }
    this.state = {
      weatherImg: '',
      showWeaherButton: true,
      weatherImgShow: false,
      weatherinfo: {},
      city: city
    }
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
        {this.state.showWeaherButton ? null : <WeatherWindow
          weatherImg={this.state.weatherImg}
          showWeaherButton={this.state.showWeaherButton}
          weatherinfo={this.state.weatherinfo}
          city={this.state.city}
          event={
            (e) => {
              this.setState({
                showWeaherButton: e
              })
            }
          }
          citySet={
            (e) => {
              this.setState({
                city: e
              })
              setTimeout(() => {
                this.getWeather()
              }, 5)
            }
          } />}
      </>
    )
  }
  showWeatherWindow() {
    this.setState({
      showWeaherButton: false
    })
  }
  getWeather = () => {
    TarRequest('GET', "https://mark.tnyl.xyz/weather/weather/baidu", {
      city: this.state.city
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
        weatherImgShow: true,
        weatherinfo: res
      })
    })
  }
  componentDidMount() {
    this.getWeather()
  }
}
