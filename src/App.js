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
import Shipping from "./pages/shipping/Shipping";
import Dashboard from "./pages/dashboard/DashBoard";
import MyAllOrders from "./pages/myAllOrders/MyAllOrders";
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ManageAllProduct from "./pages/manageAllProducts/ManageAllProduct";
import AddNewProduct from "./pages/addNewProduct/AddNewProduct";
import UpdateProductInformations from "./pages/updateProductInformations/UpdateProductInformations";
import MakeAdmin from "./pages/makeAdmin/MakeAdmin";
import ManageAllOrders from "./pages/manageAllOrders/ManageAllOrders";
import UserReview from "./pages/userReview/UserReview";
import MyAllReview from "./pages/myAllReview/MyAllReview";
import Pay from "./pages/pay/Pay";
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";
import NotFound from './pages/notFound/NotFound';
import DashboardPage from "./pages/dashBoardPage/DashboardPage";
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
              <Route path="/shipping/:OrderProductId" element={
              <PrivateRoute>
                  <Shipping/>
              </PrivateRoute>}/>
              <Route path="/product-review/:reviewProductId" element={
                <PrivateRoute>
                    <UserReview/>
                </PrivateRoute>
              }/>
              <Route path="/dashboard/*" element={
                  <PrivateRoute>
                    <Dashboard/>
                  </PrivateRoute>
                }>
                <Route path="" element={<DashboardPage/>}/>
                <Route path="my-all-orders" element={<MyAllOrders/>}/>
                <Route path="reviews" element={<MyAllReview/>}/>

                <Route path="manage-products" element={
                  <AdminPrivateRoute>
                      <ManageAllProduct/>
                  </AdminPrivateRoute>
                }/>
                <Route path="manage-products/dashboard/update-product-informations/:PreviousProductId" element={
                  <AdminPrivateRoute>
                      <UpdateProductInformations/>
                  </AdminPrivateRoute>
                }/>
                <Route path="add-product" element={
                  <AdminPrivateRoute>
                      <AddNewProduct/>
                  </AdminPrivateRoute>
                }/>
                <Route path="make-admin" element={
                  <AdminPrivateRoute>
                    <MakeAdmin/>
                  </AdminPrivateRoute>
                }/>
                <Route path="manage-all-orders" element={
                  <AdminPrivateRoute>
                      <ManageAllOrders/>
                  </AdminPrivateRoute>
                }/>
                <Route path="pay" element={<Pay/>}/>                
                <Route path="*" element={<NotFound/>}/> 
              </Route>         
          </Routes>          
        </Router>        
    </FirebaseProvider>
  );
}

export default App;
