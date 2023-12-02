import { Route, Routes } from 'react-router-dom';
import Login from "../pages/login/index";
import Register from "../pages/register/index"
import Home from "../pages/home/index";

function RouterMain () {
    return (
        <Routes>
            <Route path='/' element={<Login/>} >
                <Route path='login' element={<Login/>}></Route>
            </Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='*' element={`<h1>Hellow Word</h1>`}></Route>
        </Routes>
    );
}

export default RouterMain;