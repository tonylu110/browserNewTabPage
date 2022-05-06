import React, { Component } from 'react'
import '../TopLeftButton/TopLeftButton.css'
import './WeatherWindow.css'

export default class WeatherWindow extends Component {
  constructor(props) {
    var screenwidth = window.innerWidth
    var isMobile = screenwidth < 768
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
      city: '',
      isMobile: isMobile
    }
  }
  render() {
    return (
      <>
        {!this.state.showWeaherButton ? (
          <div className='top_left_button'>
            <div className='tl_button weather' style={this.state.weatherWindowShowStyle}>
              <img src={this.state.weatherImg} style={this.state.weatherImgShowStyle} alt="" onClick={() => this.showWeatherWindow()} />
              {this.state.showWeatherInfo ? (
                <div className="weather_main" style={{margin: this.state.isMobile ? '10px 0px 0px 0px' : ''}}>
                  <div className="weather_city">
                    <input type="text" onKeyUp={this.citySet} placeholder={"当前城市：" + this.state.city} />
                    <div onClick={() => this.setCity()}>确定</div>
                  </div>
                  <div className="day_weather" style={{top: this.state.isMobile ? '137px' : ''}}>
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
        {this.state.isMobile ? <div className='black_back' style={{ zIndex: this.state.showWeaherButton ? '' : '10' }} onClick={() => this.clickBlackBack()}></div> : null}
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
  clickBlackBack() {
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
      var screenwidth = window.innerWidth
      console.log(screenwidth);
      this.setState({
        weatherWindowShowStyle: {
          width: (this.state.isMobile ? '270px' : '350px'),
          height: (this.state.isMobile ? '310px' : '250px'),
          padding: '20px',
          display: 'flex',
          flexDirection: (this.state.isMobile? 'column' : 'row'),
          transform: (this.state.isMobile ? 'translateX(' + (screenwidth - 350) / 2 + 'px) translateY(100px)' : '')
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
