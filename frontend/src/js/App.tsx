import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import Theme from './utils/Theme'
import GlobalStyle from './utils/Theme/Global'
import Reminders from './components/Reminders/Reminders'
import SideBar from './components/Navigation/SideBar'
import MainNav from './components/Navigation/MainNav'
import { ReminderContextProvider } from './context/RemindersContext'
import { filterOptions } from './utils/interfaces'

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 10% 90%;
`

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ReminderContextProvider>
        <Router>
          <Switch>
            <Route path="/">
              <AppWrapper>
                <MainNav />
                <SideBar setCategories={filterOptions} />
                <Reminders />
                <GlobalStyle />
              </AppWrapper>
            </Route>
          </Switch>
        </Router>
      </ReminderContextProvider>
    </ThemeProvider>
  )
}

export default App
