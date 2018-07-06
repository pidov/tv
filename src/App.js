import React, { Component } from 'react'
import Slider from "react-slick"
import classNames from 'classnames'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slider: null,
      subSlider: null,
      slides: [
        {className: 'hbo', name:'HBO GO'},
        {className: 'youtube', name:'YouTube'},
        {className: 'twitch', name:'Twitch'},
        {className: 'plex', name:'Plex'},
        {className: 'spotify', name:'Spotify'},
        {className: 'games', name:'Games'},
        {className: 'browser', name:'Browser'},
        {className: 'tv', name:'TV'}
      ],      
      subSlides: [
        {className: 'hbo', name:'HBO GO', description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit. Id cursus metus aliquam eleifend mi in nulla posuere.</p>'},
        {className: 'youtube', name:'YouTube', description:'<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Justo laoreet sit amet cursus sit. Bibendum at varius vel pharetra vel. Id diam maecenas ultricies mi eget mauris pharetra. Dolor morbi non arcu risus quis.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Justo laoreet sit amet cursus sit.</p> <p> Bibendum at varius vel pharetra vel. Id diam maecenas ultricies mi eget mauris pharetra. Dolor morbi non arcu risus quis.</p>'},
        {className: 'twitch', name:'Twitch'},
        {className: 'plex', name:'Plex'},
        {className: 'spotify', name:'Spotify'},
        {className: 'games', name:'Games'},
        {className: 'browser', name:'Browser'},
        {className: 'tv', name:'TV'}
      ]
    }
  }
  
  componentDidMount() {
    this.setState({
      slider: this.slider,
      subSlider: this.subSlider
    })
  }

  render () {
    const settings = {
      arrows: false,
      infinite: true,
      className: 'center',
      centerMode: true,
      centerPadding: '20px',
      speed: 100,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: this.state.subSlider
    }

    const settingsSubSlider = {
      arrows: false,
      infinite: true,
      fade: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: this.state.slider
    }

    return (
      <div>
        <Slider tabIndex={1} {...settings} ref={slider => (this.slider = slider)}>
          {this.state.slides.map(({ name, className, ...rest}) => (
            <div key={name} className={classNames('slide', className)} >
              <h3 className='brand'>{name}</h3>
            </div>
          ))}
        </Slider>
        <div className='main container'>
          <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-9'>
              <Slider className='app-description' tabIndex={2} {...settingsSubSlider} ref={slider => (this.subSlider = slider)}>
                {this.state.subSlides.map(({ name, description, className, ...rest}) => (
                  <div key={name} className={classNames('slide', className)} >
                    <h1>{name}</h1>
                    <div dangerouslySetInnerHTML={{__html: description}} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
