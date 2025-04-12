import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Tools from '../pages/Tools'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'
import Layout from '../components/layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'tools', element: <Tools /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
