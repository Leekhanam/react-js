import React, { useState } from 'react';
import dataFake from './dataFake';
import Routers from './routers'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import apiUsers from './api/userApi';
import Swal from 'sweetalert2';  

function App() {
  
  const [users, setUsers] = useState([]);
  const [userLogin,setUserLogin] = useState({isLogin:false});

  const onLogin = async (dataForm)=>{
    // console.log(dataForm)
      const {data} = await apiUsers.login(dataForm)
      // console.log(data)
    if(data[0])
      {
        const userLogin ={
        id:data[0].id,
        username:data[0].username,
        avatar:data[0].avatar,
        role:data[0].role,
        isLogin:true
      }
      // console.log(userLogin);
      localStorage.setItem('userData',JSON.stringify(userLogin));
      
         const dataUser = JSON.parse(localStorage.getItem('userData'));
        setUserLogin(dataUser)
      
        Swal.fire(
          'Chào bạn',
          'Đăng nhập thành công',
          'success'
          )
        }else{
          window.location.assign("/dang-nhap",Swal.fire(
            'Đăng nhập',
            'Tài khoản hoặc mật khẩu không đúng',
            'error',
        ))            
      }
    }
    //Tránh F5 mất localStorage
    
  
//đăng xuất
  const onLogOut=()=>{
    localStorage.removeItem('userData')
    localStorage.removeItem('fake')
    localStorage.clear()
    setUserLogin({islogin:false})
    Swal.fire("Thông báo","Bạn đã đăng xuất thành công","success")
  }
  return (
    <div className="App">
      <Routers 
      userLogin={userLogin}
      onAddLogin={onLogin}
      onLogOut={onLogOut} />
    </div>
  )

}
export default App;