import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Home1 from './components/Home1.jsx'
import About from './components/About.jsx'
import Testimonial from './components/Testimonial.jsx'



const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/home1' element={<Home1/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/testimonial' element={<Testimonial/>}/>

    </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
