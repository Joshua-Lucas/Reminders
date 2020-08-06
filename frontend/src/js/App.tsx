import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import Theme from './utils/Theme'
import Reminders from './components/Reminders/Reminders'
import SideBar from './components/Navigation/SideBar'
import MainNav from './components/Navigation/MainNav'

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 10% 90%;
`

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path="/">
            <AppWrapper>
              <MainNav />
              <SideBar
                setFilter={['Sunday', 'Monday', 'Tuesday', 'Wednesday']}
              />
              <Reminders />
            </AppWrapper>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
