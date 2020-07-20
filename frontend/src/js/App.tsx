import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import '../css/App.css'
import Reminders from './components/Reminders/Reminders'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Reminders />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
