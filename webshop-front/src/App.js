import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
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

  const [admin, setAdmin] = useState();
  function addAdmin(admin) {
    setAdmin(admin);
  }
  const [user, setUser] = useState();
  function addUser(user) {
    setUser(user);
  }
  const[cartNumber,setcartNumber] = useState(0);
  const[cartProducts,setcartProducts] = useState({
    "products": [],
    "sum":0
  });
 
  function addToCart(product){
    if(cartProducts.products.length == 0){
      cartProducts['products'].push(product);
      setcartProducts(cartProducts);
    }else{
      let keyExist = cartProducts.products.some(key => key?.id === product.id);
      if(keyExist){
        cartProducts.products.forEach(element => {
          if(element.id == product.id){
            var temp={
              'size':product.sizes[0].size,
              'quantity':product.sizes[0].quantity
            }
            element.sizes.push(temp);
          }
        });
        setcartProducts(cartProducts);
      }else{
        cartProducts['products'].push(product);
        setcartProducts(cartProducts);
      }
    }
    var sum=0;
    var quan =0;
    cartProducts.products.forEach(element => {
      element.sizes.forEach(sz=>{
        quan+=sz.quantity;
      });
        sum+= quan*element.price;
        element['sum']=quan*element.price;
        quan=0;
      }
    );
    cartProducts['sum']=sum;
    setcartProducts(cartProducts);
    setcartNumber(cartNumber+1);
  }
  return (
    <Router>
      <Routes>
        <Route path='' element={<Navbar token={token} addToken={addToken} admin={admin} addAdmin={addAdmin} cartNumber={cartNumber}/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/login' element={<Login addToken={addToken} addAdmin={addAdmin} addUser={addUser}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/shop' element={<Shop token={token}/>}/>
            <Route path='/product/:slug' element={<SingleProduct addToCart={addToCart}/>}/>       
            <Route path='/adminpanel' element={<AdminPanel admin={admin} token={token}/>}/>
            <Route path='/checkout' element={<Checkout cartProducts={cartProducts} setcartNumber={setcartNumber} setcartProducts={setcartProducts} user={user}/>}/>          
        </Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;
