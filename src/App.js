import React, { Component } from 'react'
import Nav from './components/Nav'
import { Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import ShopProducts from './views/ShopProducts'
import ViewCart from './views/ViewCart'


export default class App extends Component {
  
  render() {
    return (
      <div>
            <Nav />
        <Switch>
          {/* <Route>
          </Route> */}
        
        <Route exact path="/" render={ ()=> <Home /> } />
        <Route exact path="/shop" render={ ()=> <ShopProducts /> } />
        <Route exact path="/cart" render={ ()=> <ViewCart /> } />

        </Switch>
      </div>
    )
  }
}
