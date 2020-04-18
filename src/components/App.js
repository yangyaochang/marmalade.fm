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

const About = () => <h1>About</h1>
const Archive = () => <h1>Archive</h1>

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      palying: false,
      currentMix: ''
    }
  }

  componentDidMount() {
    this.mountAudio()
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
    console.log(this.widget)
  }

  // this is an object literal
  actions = {
    tooglePlay: () => {
      this.widget.togglePlay()
    }, 
    playMix: (mixName) => {
      this.setState({
        currentMix: mixName
      })
      this.widget.load(mixName, true)
    }
  }

  render() {
    return (
      // the Router component wraps out the whole page and lets us use react-router
      <Router>
        {/* // this div contains everything */}
        <div className="App">
          {/* this div contains our page (excluding audio player)*/}
          <div className = 'flex-l justify-end'>
            {/* FeatureMix (needs styling and updating) */}
            <FeatureMix/>
            <div className = 'w-50-l relative z-1  '>
              {/* Header (needs styling and updating) */}
              <Header/>
              {/* Routed Page */}
              <Switch>
                <Route exact path="/">
                  <Home {...this.state} {...this.actions}/>
                </Route>
                <Route path="/archive">
                  <Archive/>
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
