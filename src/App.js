import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import Resume from './pages/resume'
import styled from '@emotion/styled'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  const CenteredApp = styled.div`text-align: center; padding-bottom: calc(100px + (200 - 100) * ((100vw - 300px) / (1600 - 300)));`
  return (
    <CenteredApp>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </CenteredApp>
  );
}

export default App;
