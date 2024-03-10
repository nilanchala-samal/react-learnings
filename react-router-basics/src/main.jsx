import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import OrderSummary from './components/OrderSummary.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import Products from './components/Products.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'
import NewProducts from './components/NewProducts.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='products' element={<Products />}>
        <Route path='featured' element={<FeaturedProducts/>}/>
        <Route path='new' element={<NewProducts/>}/>
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
