import { Redirect, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Service from './Pages/Service'
import About from './Pages/About'
import Sign_Up from './Pages/Sign_Up'
import Contact from './Pages/Contact'
import HowWorkit from './Pages/HowWorkit'

const App = () => {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/Service' component={Service} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/SignUp' component={Sign_Up} />
        <Route exact path='/work' component={HowWorkit} /> */}
        <Redirect to="/" />
      </Switch>

      <HowWorkit />
    </>
  )
}
export default App
