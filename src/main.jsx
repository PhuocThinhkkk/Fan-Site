import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Character from './pages/Character.js'

const router = createBrowserRouter([
  {path:"/", element:<App />},
  {path:'*', element:<NotFound></NotFound>},
  {path:"/Character", element: <Character></Character>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
