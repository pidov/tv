import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Slider from "react-slick"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slides: [
        'HBO GO',
        'YouTube',
        'Plex',
        'Twitch',
        'Spotify',
        'TV',
        'Games',
        'Browser'
      ]
    }
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this.refs.slider).focus()
    console.log(ReactDOM.findDOMNode(this.refs.slider))
  }

  render () {
    const settings = {
      arrows: false,
      infinite: true,
      className: 'center',
      centerMode: true,
      centerPadding: '20px',
      speed: 150,
      slidesToShow: 5,
      slidesToScroll: 1
    }

    return (
      <div>
        <h2 tabIndex={123} onKeyDown={e => {console.log(e)}}> Single Item</h2>
        <Slider tabIndex={231} {...settings} ref='slider'>
          {this.state.slides.map(slide => (
            <div key={slide} className='slide'>
              <h3>{slide}</h3>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default App
