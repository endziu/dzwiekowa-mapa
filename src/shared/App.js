import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mapa from './comps/Mapa.js'
import List from './comps/List.js'
import Menu from './comps/Menu.js'
import Welcome from './comps/Welcome.js'
import Sound from './comps/Sound.js'
import NoMatch from './comps/NoMatch.js'
import { getSoundById } from './helpers/'

class App extends Component {

  constructor () {
    super()
    this.state = {
      isPlaying: false
    }
    this.playClick = this.playClick.bind(this)
    this.listClick = this.listClick.bind(this)
    this.onEnded = this.onEnded.bind(this)
  }

  onEnded (e) {
    this.setState({ isPlaying: false })
  }

  playClick (e) {
    const audioElem = this.Sound.Player.audioEl
    if (this.state.isPlaying) {
      audioElem.pause()
    } else {
      audioElem.play()
    }
    this.setState({ isPlaying: !this.state.isPlaying })
  }

  listClick (e) {
    this.setState({isPlaying: false})
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact={true} path='/' component={Welcome} />
          <Route 
            path='/rec/:id' 
            render={ ({ match }) =>
              <div className='App flex-auto flex-ns flex-row-ns justify-end f6 black-80 bg-white'>
                <Mapa currentSound={getSoundById(match.params.id, this.props.sounds)} />
                <div className='flex flex-column vh-60 vh-100-ns w-100 mw6-ns ph1 bl-m bl-l fadeIn animated'>
                  <Sound
                    ref={ref => this.Sound = ref}
                    currentSound={getSoundById(match.params.id, this.props.sounds)}
                    onEnded={this.onEnded}
                    playClick={this.playClick}
                    isPlaying={this.state.isPlaying} />

                  <List
                    onClick={this.listClick}
                    sounds={this.props.sounds}
                    currentId={match.params.id} />
                </div>
              </div>
            }
          />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App

