import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Mapa from './comps/Mapa.js'
import List from './comps/List.js'
import Menu from './comps/Menu.js'
import Welcome from './comps/Welcome.js'
import Search from './comps/SearchField'
import Sound from './comps/Sound.js'
import NoMatch from './comps/NoMatch.js'
import { getSoundById } from './helpers/'

import './assets/tachyons.min.css'
import './assets/style.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      isPlaying: false,
      filter: '',
      sounds: []
    }
    this.playClick = this.playClick.bind(this)
    this.listClick = this.listClick.bind(this)
    this.markerClick = this.markerClick.bind(this)
    this.onEnded = this.onEnded.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.searchSubmit = this.searchSubmit.bind(this)
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

  markerClick (val) {
    const pathToRedirect = `/rec/${this.state.sounds[val].id}`
    console.log(`redirect to: ${pathToRedirect}`)
  }

  listClick (e) {
    this.setState({isPlaying: false})
  }

  searchChange (e) {
    const s = this.props.sounds
    this.setState({
      filter: e.target.value.toLowerCase(),
      sounds: s.filter(i => i.description.toLowerCase().search(this.state.filter) !== -1)
    })
  }

  searchSubmit (e) {
    e.preventDefault()
    this.setState({filter: '', sounds: this.props.sounds})
  }

  componentDidMount () {
    this.setState({sounds: this.props.sounds})
    fetch('/api')
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route
            path='/rec/:id'
            render={({ match }) =>
              <div className='App flex-auto flex-ns flex-row-ns justify-end f6 black-80 bg-white'>

                <Search
                  filter={this.state.filter}
                  handleSubmit={this.searchSubmit}
                  handleChange={this.searchChange}
                />

                <Menu id={match.params.id} />

                <Mapa
                  onClick={this.markerClick}
                  sounds={this.state.sounds}
                  currentSound={getSoundById(match.params.id, this.props.sounds)}
                />

                <div className='flex flex-column vh-60 vh-100-ns w-100 mw6-ns ph1 bl-m bl-l fadeIn animated'>

                  <Sound
                    ref={ref => (this.Sound = ref)}
                    currentSound={getSoundById(match.params.id, this.props.sounds)}
                    onEnded={this.onEnded}
                    playClick={this.playClick}
                    isPlaying={this.state.isPlaying}
                  />

                  <List
                    onClick={this.listClick}
                    sounds={this.state.sounds}
                    currentId={match.params.id}
                  />

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
