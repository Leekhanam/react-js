import React, {useState,useEffect} from "react";
import { useForm } from "react-hook-form";
//import Breadcrumb from "../../../../components/Home/Breadcrumb";
import { useHistory,Link } from "react-router-dom";
import Swal from 'sweetalert2'
// import jwt from 'jsonwebtoken';

const Login = ({name,userLogin,onAddLogin,users}) => {
  const { handleSubmit, register, errors } = useForm();
  const {isLogin} = userLogin;
  console.log(userLogin);
  let history = useHistory();

  if(isLogin === true){
    history.push('/',Swal.fire("Đăng nhập","Bạn đã đăng nhập rồi","error"));

  }
  useEffect(() => {
    window.document.title=name;
    window.scrollTo(0,10)
  }, [])


  const onSubmit = (data)=>{
      const user={
        ...data
      }
    //   console.log(data);
    onAddLogin(user);
    history.push("/");
  }
  return (
    <div>
        
        <section className="login_part section_padding ">
            <div className="container">
                <div className="row align-items-center center">
                    <div className="col-lg-12 col-md-12 center">
                        <div className="login_part_form center">
                            <div className="login_part_form_iner center">
                                <h3>Đăng nhập || <span style={{fontSize:'20px'}}><Link to="dang-ky" className="text-success">Tạo tài khoản</Link></span></h3>
                                
                                <form className="row contact_form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="email"
                                            ref={register({
                                            required: "Email của bạn",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Không đúng định dạng email"
                                            }
                                            })}
                                            placeholder="Email..."
                                        />
                                        <div>
                                            <span style={{color:'red'}}>{errors.email && errors.email.message}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            ref={register({
                                            validate: value => value !== "admin" || "Nice try!"
                                            })}
                                            placeholder="Password..."
                                        />
                                        <div>
                                        <span style={{color:'red'}}>{errors.password && errors.password.message}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account d-flex align-items-center">
                                            <input type="checkbox" id="f-option" name="selector" />
                                            <label htmlFor="f-option">Remember me</label>
                                        </div>
                                        <button type="submit" value="submit" className="btn_3">Đăng nhập</button>
                                        <a className="lost_pass" href="#">Quên mật khẩu?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>      
    </div>
  );
};

export default Login