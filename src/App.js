import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Home from './Routes/Home'
import Shop from './Routes/Shop'
import Cart from './Routes/SCart'
import Blog from './Routes/Blog'
import About from './Routes/About'
import COntact from './Routes/COntact'
import SingupPage from './Routes/SingupPage'
import LoginPage from './Routes/LoginPage'
import Footer from './components/Footer'
import './App.css';
import './responsive.css';
import products from '../src/components/data'
import { blogData } from '../src/components/data'
import { aboutData } from '../src/components/data'
import { createContext } from 'react'
import { CartProvider } from "react-use-cart"
import Women from './Routes/Women'
import Men from './Routes/Men'
import Accessory from './Routes/Accessory'
const productValues = createContext()
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/signup' component={SingupPage}> </Route>
        <Route exact path='/' component={LoginPage}></Route>
        <Route exact path='/home'>
          <productValues.Provider value={products.productDataForOverview}>
            <Home />
          </productValues.Provider>
        </Route>
        <Route exact path='/women' component={Women}></Route>
        <Route exact path='/men' component={Men}></Route>
        <Route exact path='/access' component={Accessory}></Route>
        <Route exact path='/shop'>
          <CartProvider>
            <Shop productDataForAll={products.productDataForAll} />
          </CartProvider>
        </Route>
        <Route exact path='/blog'>
          <Blog blogData={blogData} />
        </Route>
        <Route exact path='/about'>
          <About aboutData={aboutData} />
        </Route>
        <Route exact path='/contact' component={COntact}></Route>
        <Route exact path='/cart'>
          <CartProvider>
            <Cart />
          </CartProvider>
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
export default App
export { productValues }