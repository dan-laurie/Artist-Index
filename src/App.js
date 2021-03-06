import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'
import Error from './components/Error'

function App() {
  return (
    <div className="site-wrapper d-flex flex-column">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
