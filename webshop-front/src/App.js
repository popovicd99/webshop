import './App.css';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import SingleProduct from './pages/SingleProduct';
import AdminPanel from './pages/AdminPanel';
import { useState } from 'react';
import Navbar from './components/Navbar';


function App() {
  const [token, setToken] = useState();
  function addToken(token) {
    setToken(token);
  }
  return (
    <Router>
      <Routes>
        <Route path='' element={<Navbar token={token} addToken={addToken}/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/login' element={<Login addToken={addToken} />}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/shop' element={<Shop token={token}/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/adminpanel' element={<AdminPanel/>}/>
        </Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;
