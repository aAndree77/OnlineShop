import './App.css'
import Nav from './components/Nav'
import Theme from './components/Theme'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import { Route, Routes } from 'react-router-dom'
import Date from './components/Date'
import Products from './pages/Products'
import CartContextFunc from './components/CartContext'

function App() {


  return(
    <Date>
      <Theme>
        <CartContextFunc>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/contact'element={<Contact/>}/>
            <Route path='/shop'element={<Shop/>}/>
            <Route path='/cart'element={<Cart/>}/>
            <Route path="/products/:id" element={<Products/>}/>
          </Routes>
        </CartContextFunc>
      </Theme>
    </Date>

    
  )
}

export default App
