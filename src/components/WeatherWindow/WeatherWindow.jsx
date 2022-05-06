import React, { Component } from 'react'
import '../TopLeftButton/TopLeftButton.css'
import './WeatherWindow.css'

export default class WeatherWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWeaherButton: true,
      weatherImg: '',
      weatherInfo: {},
      weatherWindowShowStyle: {},
      weatherImgShowStyle: {},
      otherWeather: {},
      showWeatherInfo: false,
      cityTemp: '北京',
      city: ''
    }
  }
  render() {
    return (
      <>
        {!this.state.showWeaherButton ? (
          <div className='top_left_button'>
            <div className='tl_button' style={this.state.weatherWindowShowStyle}>
              <img src={this.state.weatherImg} style={this.state.weatherImgShowStyle} alt="" onClick={() => this.showWeatherWindow()} />
              {this.state.showWeatherInfo ? (
                <div className="weather_main">
                  <div className="weather_city">
                    <input type="text" onKeyUp={this.citySet} placeholder={"当前城市：" + this.state.city} />
                    <div onClick={() => this.setCity()}>确定</div>
                  </div>
                  <div className="day_weather">
                    <div className="today_weather">{this.state.weatherInfo.weather[0].weather}</div>
                    <div>今日气温：{this.state.weatherInfo.weather[0].temp}</div>
                    <div className="fea_weather">
                      <div className="fea_weatherbox">
                        <div className="weather_time">明天</div>
                        <div>{this.state.weatherInfo.weather[1].weather}</div>
                        <img src={this.getWeatherImg(this.state.weatherInfo.weather[1].weather)} alt='' />
                        <div>{this.state.weatherInfo.weather[1].temp}</div>
                      </div>
                      <div className="fea_weatherbox">
                        <div className="weather_time">后天</div>
                        <div>{this.state.weatherInfo.weather[2].weather}</div>
                        <img src={this.getWeatherImg(this.state.weatherInfo.weather[2].weather)} alt='' />
                        <div>{this.state.weatherInfo.weather[2].temp}</div>
                      </div>
                      <div className="fea_weatherbox">
                        <div className="weather_time">{this.getWeatherTime(this.state.weatherInfo.weather[3].date)}</div>
                        <div>{this.state.weatherInfo.weather[3].weather}</div>
                        <img src={this.getWeatherImg(this.state.weatherInfo.weather[3].weather)} alt='' />
                        <div>{this.state.weatherInfo.weather[3].temp}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </>
    )
  }
  showWeatherWindow() {
    this.setState({
      weatherImgShowStyle: {},
      weatherWindowShowStyle: {},
      showWeatherInfo: false
    })
    setTimeout(() => {
      this.props.event(true)
    }, 300)
  }
  setCity() {
    this.props.citySet(this.state.cityTemp)
  }
  citySet = (e) => {
    localStorage.setItem('city', e.target.value)
    this.setState({
      cityTemp: e.target.value
    })
  }
  getWeatherTime(time) {
    return time.split('（')[0]
  }
  getWeatherImg(weather) {
    if (weather.search("多云") !== -1) {
      return ('img/weather/00.png')
    } else if (weather.search("晴") !== -1) {
      return ('img/weather/01.png')
    } else if (weather.search("阴") !== -1) {
      return ('img/weather/02.png')
    } else if (weather.search("雪") !== -1) {
      return ('img/weather/03.png')
    } else if (weather.search("雨") !== -1) {
      return ('img/weather/04.png')
    } else {
      return ('img/dLinkIcon.png')
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        weatherWindowShowStyle: {
          width: '350px',
          height: '250px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'row'
        },
        weatherImgShowStyle: {
          width: '60px',
          height: '60px'
        }
      })
    }, 1)
    setTimeout(() => {
      this.setState({
        showWeatherInfo: true
      })
    },300)
  }
  static getDerivedStateFromProps(props) {
    return {
      showWeaherButton: props.showWeaherButton,
      weatherImg: props.weatherImg,
      city: props.city,
      weatherInfo: props.weatherinfo
    }
  }
}
