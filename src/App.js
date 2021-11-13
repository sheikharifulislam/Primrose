import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import FirebaseProvider from "./context/FirebaseProvider";
import AllProducts from "./pages/allProducts/AllProducts";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registion from "./pages/registion/Registion";
import Footer from "./pages/footer/Footer";
import Shipping from "./pages/shipping/Shipping";
import Dashboard from "./pages/dashboard/DashBoard";
import MyAllOrders from "./pages/myAllOrders/MyAllOrders";
import Reviews from './pages/reviews/Reviews';
function App() {
  return (
    <FirebaseProvider>
        <Router>                    
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/all-products" element={<AllProducts/>} />
              <Route path="/registion" element={<Registion/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/shipping" element={<Shipping/>}/>
              <Route path="/dashboard/*" element={<Dashboard/>}>
                  <Route path="my-all-orders" element={<MyAllOrders/>}/>
                  <Route path="reviews" element={<Reviews/>}/>
                  
              </Route>         
          </Routes>          
        </Router>
        <Footer/>
    </FirebaseProvider>
  );
}

export default App;
