import React from "react";
import { useForm } from "react-hook-form";
//import Breadcrumb from "../../../../components/Home/Breadcrumb";
import Users from "../../../../api/userApi"
import { useHistory,Link } from "react-router-dom";
import Swal from 'sweetalert2';  

// import jwt from 'jsonwebtoken';

const SignUp = ({name,onAddUserView,users}) => {
  const { handleSubmit, register, errors } = useForm();
  let history = useHistory();
  if(localStorage.getItem('username')){
    history.push('/',Swal.fire("Đang có tài khoản đăng nhập rồi"))
  }
  React.useEffect(() => {
    window.document.title=name;
    window.scrollTo(0,10)
  }, [])
  const lastId = users.length === 0 ? 1 : Number(users[users.length-1].id)+1;

  const onSubmit = (data)=>{
    const username = users.find(user => user.username === data.username);
    const email = users.find(user => user.email === data.email);
    // console.log(username);
    // console.log(email);
    if (username || email){
        Swal.fire(
            "Thông báo",
            "Tên hoặc email bị trùng",
            "error"
        )
    }else{
      const newUser={
          id:Number(lastId),
          username:data.username,
          email:data.email,
          password:data.password,
          role:1,
          avatar:"",
      }
      console.log(newUser);
      onAddUserView(newUser);
      history.push('/dang-nhap');
    }
  }
  return (
    <div>
        {/* <Breadcrumb name="Tạo tài khoản"/> */}
        <section className="login_part section_padding ">
            <div className="container">
            <div className="row align-items-center center">
                    <div className="col-lg-12 col-md-12 center">
                        <div className="login_part_form center">
                            <div className="login_part_form_iner center">
                                <h2>Tạo tài khoản</h2>
                                <form className="row contact_form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            className="form-control"
                                            name="username"
                                            type="text"
                                            ref={register({
                                            required: "Nhập tên tài khoản"
                                            }
                                            )}
                                            placeholder="Username..."
                                        />
                                        <div>
                                            <span style={{color:'red'}}>{errors.email && "Chưa nhập tên tài khoản"}</span>
                                        </div>
                                    </div>
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
                                        <   span style={{color:'red'}}>{errors.username && errors.username.message}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="btn_3">Đăng nhập</button>
                                        <Link className="text-success" to="/dang-nhap">Đã có tài khoản</Link>
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

export default SignUp