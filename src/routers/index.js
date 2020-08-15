import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
import Swal from 'sweetalert2'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Contact from '../pages/views/Main/Contact';
import Shop from '../pages/views/Main/Shop';

import Login from '../pages/views/Users/Login';
import SignUp from '../pages/views/Users/SignUp';


const Routers = ({       products, 
                        onRemove, 
                        userLogin,
                        onAddLogin,
                        onLogOut, 
                        onAddUserView,
                        users
                    }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
  
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" >
                <LayoutAdmin userLogin={userLogin} onLogOut={onLogOut}>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>

                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/dang-nhap" exact>
                                <Login name="Đăng nhập" userLogin={userLogin} onAddLogin={onAddLogin}/>
                            </Route>
                            <Route path="/dang-ky" exact>
                                <SignUp name="Đăng kí tài khoản" users={users} onAddUserView={onAddUserView}/>
                            </Route>

                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/shop">
                                <Shop />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}


Routers.propTypes = {

}

export default Routers
