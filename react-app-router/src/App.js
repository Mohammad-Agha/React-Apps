import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import Shop from './components/Shop'
import About from './components/About'
import ShopItem from './components/ShopItem'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ShopItem} />
        </Switch>
      </div>
    </Router>
  )
}

export default App