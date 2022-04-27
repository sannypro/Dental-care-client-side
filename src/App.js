import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import RequireRoute from './components/RequiredRoute/RequireRoute';
import Signup from './components/Signup/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddService from './components/AddService/AddService';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Manage from './components/Manage/Manage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/add-service' element={<RequireRoute><AddService /></RequireRoute>}></Route>
        <Route path='/manage' element={<RequireRoute><Manage></Manage></RequireRoute>}></Route>
        <Route path='/orders' element={<RequireRoute><ManageOrders></ManageOrders></RequireRoute>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireRoute>
            <CheckOut></CheckOut>
          </RequireRoute>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>



      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
