import React, { useState } from 'react'
import { useParams, useHistory , Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase from '../../../../firebase'
import Breadcrumb from '../../../../components/Home/Breadcrumb';
import Swal from 'sweetalert2';


const Profile = ({name,users,onUpdateUserView}) => {
    const { handleSubmit,errors,register } = useForm(); // Sử dụng hook form
    let { id } = useParams();
    let history = useHistory();
    const user = users.find(user=>Number(user.id) === Number(id));
    const userOther = users.filter(data => data.username !== user.username);
    // console.log(userOther);
    // console.log(user);
    React.useEffect(() => {
        window.document.title=user.username;
        window.scrollTo(0,10)
    }, [])

    const [img, setImg] = useState(null);
    const [imgData, setImgData] = useState(null);    

    const Handle = e =>{
            if (document.querySelector("#UserImage").value==="") {            
                setImgData(user.avatar)
                setImg(user.avatar)
            }else{
                setImg(e.target.files[0]);
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                setImgData(reader.result);
                });
                reader.readAsDataURL(e.target.files[0]);
                document.querySelector('#noHidden').setAttribute("hidden",true);
            }
    }
    
    

    const onHandleSubmit = (data) => {
        let username = userOther.find(user=>user.username === data.username);
        let email = userOther.find(user=>user.email === data.email);
        if(username || email){
            Swal.fire(
                "Sửa thông tin",
                "Tài khoản hoặc Email đã tồn tại",
                "error"
            )
        }else{
            
            if(document.querySelector("#UserImage").value===""){
                const newData = {
                    id:user.id,
                    ...data,
                    avatar:user.avatar,
                    role:Number(user.role),
                    password: data.password ==="" ? user.password : data.password,
                }
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                // console.log(newData);
                onUpdateUserView(newData);
                history.push('/');
            }
            else{
                let storageRef = firebase.storage().ref(`images/${img.name}`);
                // đẩy ảnh lên đường dẫn trên
                storageRef.put(img).then(function () {
                    storageRef.getDownloadURL().then((url) => {
                        // Tạo object mới chứa toàn bộ thông tin từ input
                        const newData = {
                            id:user.id,
                            ...data,
                            role:Number(user.role),
                            avatar:url,
                            password: data.password ==="" ? user.password : data.password,

                        }
                        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                        // console.log(newData);
                        onUpdateUserView(newData);
                        history.push('/');
                    })
                });
        }
    }
        
        
        
    }
    return (
        <div>
        <Breadcrumb name={user.username}/>
        <div className="row">
            <div className="col-xl">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{user.username}</h5>
                        <div className="row col-12">
                            <div className="col-7">
                                <form onSubmit={handleSubmit(onHandleSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="UserName">Username</label>
                                        <input type="text" name="username" id="UserName" defaultValue={user.username} className="form-control" 
                                        ref={register({ required: true, minLength:5,pattern:/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/})}
                                        placeholder="Username ..." />
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.username && errors.username.type === "required" && <span>Nhập tên người dùng</span>}
                                            {errors.username && errors.username.type === "pattern" && <span>Không được sử dụng các kí tự đặc biệt</span>}
                                            {errors.username && errors.username.type === "minLength" && <span>Tên người dùng phải lớn hơn 5 kí tự</span>}
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Email">Email</label>
                                        <input type="text" name="email" id="Email" defaultValue={user.email} className="form-control" 
                                        ref={register({ required: true,pattern:/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/ })}
                                        placeholder="Email..." />
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.email && errors.email.type === "required" && <span>Nhập email</span>}
                                            {errors.email && errors.email.type === "pattern" && <span>Chưa đúng định dạng email</span>}
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="UserImage">Ảnh</label>
                                        <input type="file" name="avatar" id="UserImage" onChange={Handle} className="form-control" 
                                        placeholder="Ảnh..." />
                                        <small id="nameHelp" className="form-text text-danger">{errors.avatar && <span>Chưa chọn ảnh</span>}</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Mật khẩu">Mật khẩu</label>
                                        <input type="password" name="password" id="Password" className="form-control" 
                                        ref={register({minLength:6 })}
                                        placeholder="Mật khẩu ..." />
                                        <small id="nameHelp" className="form-text text-danger">
                                            {errors.password && errors.password.type === "minLength" && <span>Mật khẩu ít nhất 6 kí tự</span>}
                                        </small>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <Link to="/" className="btn btn-success">Hủy</Link>
                                </form>         
                            </div>
                            <div className="col-5">
                                <img width="100%" id="noHidden" src={user.avatar}></img>
                                <img width="100%" src={imgData} />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile