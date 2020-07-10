import React from 'react'
import Navbar from './components/navbar'
import Headline from './components/headline'
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
        <Headline/>
        <header className="App-header">
          <p>
            This is a work in progress!
          </p>
        </header>
        <style jsx>{`
          .App {
            text-align: center;
          }

          p {
            color: black;
          }

          .App-header {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
          }
        `}</style>
      </Router>
    </div>
  );
}

export default App;
