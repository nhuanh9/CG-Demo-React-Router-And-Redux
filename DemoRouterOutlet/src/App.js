import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPage from "./pages/admin/AdminPage";
import UserPage from "./pages/user/UserPage";
import ManageUser from "./pages/admin/ManageUser";
import ManageProduct from "./pages/admin/ManageProduct";
import ManageOrder from "./pages/admin/ManageOrder";
function App() {
    const navigate = useNavigate();
    return (
        <div>
            <Routes>
                <Route path={''} element={<Login/>}></Route>
                <Route path={'register'} element={<Register/>}></Route>
                <Route path={'admin'} element={<AdminPage/>}>
                    <Route path={''} element={<ManageUser/>}/>
                    <Route path={'product'} element={<ManageProduct/>}/>
                    <Route path={'order'} element={<ManageOrder/>}/>
                </Route>
                <Route path={'user'} element={<UserPage/>}></Route>
            </Routes>
        </div>
    );
}

//Routes, Route, Link, useNavigate, useParam, Outlet

export default App;
