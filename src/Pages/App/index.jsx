import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from '../Home'
import { Account } from '../Account'
import { NotFound } from '../NotFound'
import { Orders } from '../Orders'
import { Order } from '../Order'
import { SignIn } from '../SignIn'
import { NavBar } from '../../components/NavBar'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/account', element: <Account /> },
    { path: '/orders', element: <Orders /> },
    { path: '/order', element: <Order /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
