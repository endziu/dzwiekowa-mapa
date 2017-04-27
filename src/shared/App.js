import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Mapa from './comps/Mapa.js'
import List from './comps/List.js'
import Menu from './comps/Menu.js'
import Welcome from './comps/Welcome.js'
import Search from './comps/SearchField'
import Sound from './comps/Sound.js'
import Photos from './comps/Photos.js'
import Info from './comps/Info.js'
import NoMatch from './comps/NoMatch.js'
import { getSoundById, filterList } from './helpers/'

import './assets/tachyons.min.css'
import './assets/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isPlaying: false,
      filter: '',
      reset: false,
      sounds: [],
      currentSound: null,
      redirectPath: ''
    }
    this.playClick = this.playClick.bind(this)
    this.listClick = this.listClick.bind(this)
    this.markerClick = this.markerClick.bind(this)
    this.onEnded = this.onEnded.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.searchSubmit = this.searchSubmit.bind(this)
    this.searchReset = this.searchReset.bind(this)
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
    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }))
  }

  markerClick (index) {
    this.setState({isPlaying: false})
    this.setState({redirectPath: ''})

    const currentSound = document.getElementById('snd' + index)
    currentSound.scrollIntoView()

    const pathToRedirect = `/${this.state.sounds[index].id}/map`
    this.setState({redirectPath: pathToRedirect})
  }

  listClick (e) {
    this.setState({isPlaying: false})
  }

  searchChange (e) {
    this.setState({reset: true})
    this.setState({filter: e.target.value.toLowerCase()})
    this.setState(filterList)
  }

  searchSubmit (e) {
    e.preventDefault()
    this.setState({reset: true})
    this.setState({filter: ''})
    this.setState((prevState) => ({sounds: prevState.sounds}))
  }

  searchReset (e) {
    this.setState({reset: false})
    this.setState(filterList)
  }

  componentDidMount () {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    this.setState((prevState, props) => ({sounds: props.sounds}))
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact
            path='/:id/:sub'
            render={({ match }) => {
              const snd = getSoundById(match.params.id, this.props.sounds)
              return (
                <div className='App flex flex-column flex-row-ns f5 f4-l black-80 bg-white'>
                  {this.state.redirectPath ? <Redirect to={this.state.redirectPath} /> : null}
                  <Search
                    filter={this.state.filter}
                    handleSubmit={this.searchSubmit}
                    handleChange={this.searchChange}
                    handleReset={this.searchReset}
                    reset={this.state.reset}
                  />
                  <Menu id={match.params.id} />

                  {match.params.sub === 'photos'
                    ? <Photos id={match.params.id} defaultPic={snd.artwork_url || snd.userPic} images={snd.images} />
                    : null}
                  {match.params.sub === 'info'
                    ? <Info currentSound={snd} />
                    : null}
                  {match.params.sub === 'map'
                    ? <Mapa
                        onClick={this.markerClick}
                        sounds={this.state.sounds}
                        currentSound={snd}
                      />
                    : null}
                  <div className='flex flex-column sideBar vh-60 vh-100-ns w-100 mw6-ns ph1 bl-m bl-l fadeIn animated'>
                    <Sound
                      ref={ref => (this.Sound = ref)}
                      currentSound={snd}
                      onEnded={this.onEnded}
                      playClick={this.playClick}
                      isPlaying={this.state.isPlaying}
                    />
                    <List
                      onClick={this.listClick}
                      sounds={this.state.sounds}
                      currentId={match.params.id}
                      linkTo={match.params.sub}
                    />
                  </div>
                </div>
              )
            }}
          />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App
