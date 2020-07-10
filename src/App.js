import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <style jsx>{`
        .App {
          text-align: center;
        }

        p {
          color: black;
        }
      `}</style>
    </div>
  );
}

export default App;
