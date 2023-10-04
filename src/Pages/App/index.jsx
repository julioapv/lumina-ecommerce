import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home'
import { Account } from '../Account'
import { NotFound } from '../NotFound'
import { Orders } from '../Orders'
import { Order } from '../Order'
import { SignIn } from '../SignIn'
import { NavBar } from '../../components/NavBar'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/account', element: <Account /> },
    { path: '/order', element: <Order /> },
    { path: '/orders', element: <Orders /> },
    { path: '/orders/last', element: <Order /> },
    { path: '/orders/:id', element: <Order /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
      <CheckoutSideMenu />
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
