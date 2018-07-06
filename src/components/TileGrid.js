import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { chunk } from 'lodash'
import autobind from 'react-autobind'

class TileGrid extends Component {
  constructor (props) {
    super(props)
    autobind(this)
    this.state = {
      activeId: 0,
      columns: 4,
      channels: [{
        id: 0,
        name: 'BNT HD'
      }, {
        id: 1,
        name: 'Nova HD'
      }, {
        id: 2,
        name: 'BTV'
      }, {
        id: 3,
        name: 'Discovery'
      }, {
        id: 4,
        name: 'NatGeo'
      }, {
        id: 5,
        name: 'Dunno'
      }, {
        id: 6,
        name: 'Dunno'
      }, {
        id: 7,
        name: 'Dunno'
      }]
    }
  }

  componentDidMount () {
    this.scrollInView()
  }

  onKeyDown (e) {
    this.recalculate(e)
  }

  recalculate (e) {
    e.stopPropagation()
    e.preventDefault()
    const { keyCode } = e
    const { activeId, columns, channels } = this.state

    const rows = Math.ceil(channels.length / columns)
    switch (keyCode) {
      case 37: // left
        this.setState({
          activeId: (activeId > 0)
            ? activeId - 1
            : activeId
        })
        break
      case 38: // up
        this.setState({
          activeId: (activeId - columns >= 0)
            ? activeId - columns
            : activeId
        })
        break
      case 39: // right
        this.setState({
          activeId: (activeId < (columns * rows) - 1)
            ? activeId + 1
            : activeId
        })
        break
      case 40: // down
        this.setState({
          activeId: (activeId + columns < (columns * rows))
            ? activeId + columns
            : activeId
        })
        break
    }
  }
  isActive ({id}) {
    return id === this.state.activeId
  }

  scrollInView () {
    const activeChannel = this.state.channels.find(channel => this.isActive(channel))
    if (activeChannel) {
      const activeTile = ReactDOM.findDOMNode(this[activeChannel.name])
      const rect = activeTile.getBoundingClientRect()
      const offset = {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      }
    }
    // var target = $('#navigate tr td:eq('+active+')');
    // if (target.length)
    // {
    //     var top = target.offset().top;
        
    //     $('html,body').stop().animate({scrollTop: top-100}, 400);
    //     return false;
    // }
  }

  render () {
    const channels = chunk(this.state.channels, this.state.columns)

    return (
      <div className='tile-grid' tabIndex={3} onKeyDown={this.onKeyDown} >
        {channels.map(group => (
          <div className='tile-group'>
            {group.map(channel => (
              <div ref={element => (this[channel.name] = element)} className={classNames('tile', {'active': this.isActive(channel)})} >
                { channel.name }
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default TileGrid
