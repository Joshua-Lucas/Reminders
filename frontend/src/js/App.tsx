import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Reminders from './components/Reminders/Reminders'
import { ThemeProvider } from 'styled-components'
import Theme from './utils/Theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path="/">
            <Reminders />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
