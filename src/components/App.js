/*global Mixcloud*/
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "../../node_modules/react-router-dom";
import FeatureMix from './FeatureMix'
import Header from './Header'
import Home from './Home'
import Archive from './Archive'
import mixesData from '../data/mixes'



const About = () => <h1>About</h1>

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      palying: false,
      currentMix: '',
      mixIds: mixesData,
      mix: null,
      mixes: []
    }
  }

  componentDidMount() {
    this.mountAudio()
    this.fetchMixes()
  }

  fetchMixes = async() => {
    const {mixIds} = this.state

    mixIds.map(async id => {
      try {
        const response = await fetch(`https://api.mixcloud.com${id}`)
        const data = await response.json()
        this.setState((prevState, props) => ({
          mixes: [...prevState.mixes, data]
        }))
      } catch(error) {
        console.log(error)
      }
    })
  }

  mountAudio = async() => {
    // have the access to the Mixcloud object from MixCloud API
    this.widget = Mixcloud.PlayerWidget(this.player)
    await this.widget.ready
    this.widget.events.pause.on(() => {
      this.setState({
        playing: false
      })
    })
    this.widget.events.play.on(() => {
      this.setState({
        playing:true
      })
    })
  }

  // this is an object literal
  actions = {
    tooglePlay: () => {
      this.widget.togglePlay()
    }, 
    playMix: (mixName) => {
      const currentMix = this.state.currentMix
      if (mixName === currentMix) {
        return this.widget.tooglePlay()
      }
      
      this.setState({
        currentMix: mixName
      })
      this.widget.load(mixName, true)
    }
  }

  render() {
    const [firstMix = {}] = this.state.mixes

    return (
      // the Router component wraps out the whole page and lets us use react-router
      <Router>
        {/* // this div contains everything */}
        <div className="App">
          {/* this div contains our page (excluding audio player)*/}
          <div className = 'flex-l justify-end'>
            {/* FeatureMix (needs styling and updating) */}
            <FeatureMix {...this.state} {...this.actions} {...firstMix} id = {firstMix.key}/>
            <div className = 'w-50-l relative z-1  '>
              {/* Header (needs styling and updating) */}
              <Header/>
              {/* Routed Page */}
              <Switch>
                <Route exact path="/">
                  <Home {...this.state} {...this.actions}/>
                </Route>
                <Route path="/archive">
                  <Archive {...this.state} {...this.actions}/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
              </Switch>
            </div>
          </div>
          {/* AudioPlayer */}
          <iframe 
            className = 'db fixed bottom-0 z-5'
            width="100%" 
            height="60" 
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fbrooklynradio%2F100-funk%2F" 
            frameBorder="0" 
            ref = {player => this.player = player}>
          </iframe>
        </div>
      </Router>
    )
  }
}

export default App;
