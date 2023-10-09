import { useRoutes, BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home'
import { Account } from '../Account'
import { NotFound } from '../NotFound'
import { Orders } from '../Orders'
import { Order } from '../Order'
import { SignIn } from '../SignIn'
import { NavBar } from '../../components/NavBar'
import { NavBarMobile } from '../../components/NavBarMobile'
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes />
      {windowWidth < 1130 ? <NavBarMobile /> : <NavBar />}
      <CheckoutSideMenu />
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
