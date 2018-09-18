import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => (
  <Fragment>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" compoonent={About} />
  </Fragment>
)

export default App
