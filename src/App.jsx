import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import HomeUI from './pages/HomeUI';


function App() {

  const router = createBrowserRouter([
    {path: '/',
      element: <Home/>,
      children: [
      {index: true, element: <HomeUI/>},
      {path: 'shop', element: <Shop/>},
      {path: 'about', element: <About/>},
      {path: 'contact', element: <Contact/>},
      {path: 'login', element: <SignIn/>},
      {path: 'profile', element: <Profile/>}
      ]
    },

  ])

  return <RouterProvider router={router} />
}

export default App
