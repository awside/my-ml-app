import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import EDA from '../pages/EDA'
import ML from '../pages/ML'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'
import Layout from '../components/layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'eda', element: <EDA /> },
      { path: 'ml', element: <ML /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
