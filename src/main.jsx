import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Hero from './components/hero.jsx'
import Project from './components/Project.jsx'
import Certification from './components/Certification.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <Hero />
      },
      {
        path: "projects",
        element: <Project />
      },
      {
        path: "certifications",
        element: <Certification />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
