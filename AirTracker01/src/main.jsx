import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Explore from './Components/Explore/Explore.jsx'
import ResulSearch from './Components/Result/ResulSearch.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'
import { DataProvider } from './data.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='explore' element={<Explore />} />
      <Route path='result' element={<ResulSearch />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode></DataProvider>,
)