import './App.css'
import Navbar from './component/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './component/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
function App ()
{
  return (
    <div>
      
      <Router>
      
      <Navbar/>
      
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/Menu' exact element={<Menu />}/>
        <Route path='/About' exact element={<About />}/>
        <Route path='/Contact' exact element={<Contact />}/>
        
      </Routes>
      <Footer/>
      </Router>
      

      
    </div>
  );
}
export default App