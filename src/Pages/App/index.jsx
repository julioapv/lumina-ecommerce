import './App.css'
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { Orders } from '../Orders'
import { Order } from '../Order'
import { SignIn } from '../SignIn'

function App() {

  return (
    <>  
      <Home />
      <NotFound />
      <Orders />
      <Order />
      <SignIn />
    </>
  )
}

export default App
