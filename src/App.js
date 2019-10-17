import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'

import './App.css'
import './Grid.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={ PageOne } />
        <Route exact path='/2' component={ PageTwo } />
        <Route exact path='/3' component={ PageThree } />
      </Router>
    </div>
  )
}

export default App
