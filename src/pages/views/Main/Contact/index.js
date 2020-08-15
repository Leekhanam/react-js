import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Contact = ({ onAdd }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  const onHandleSubmit = (data) => {
    console.log(data);
    const newData = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    };
    console.log(newData);
    onAdd(newData);
    history.push("/");
    alert("Thank you");
  };

  return (
    <div>
      <div>
        <div
          className="intro-section"
          style={{ backgroundImage: 'url("/dist/images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <h1>Contact Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  nihil.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Explore Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-5 text-black">
                  Get <strong>In Touch</strong>
                </h2>
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        ref={register({
                          required: true,
                          pattern: /^\S{1}.{0,50}$/i,
                        })}
                      />
                      <small id="imageHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && (
                          <span>Không để trống Firat name </span>
                        )}
                        {errors.name && errors.name.type === "pattern" && (
                          <span>
                            First name không bắt đầu bằng dấu cách và ít hơn 50
                            kí tự{" "}
                          </span>
                        )}
                      </small>
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="lname">Last Name</label>
                      <input
                        type="text"
                        name="fullname"
                        className="form-control form-control-lg"
                        ref={register({
                          required: true,
                          pattern: /^\S{1}.{0,50}$/i,
                        })}
                      />
                      <small id="imageHelp" className="form-text text-danger">
                        {errors.fullname &&
                          errors.fullname.type === "required" && (
                            <span>Không để trống Last name </span>
                          )}
                        {errors.fullname &&
                          errors.fullname.type === "pattern" && (
                            <span>
                              Last name không bắt đầu bằng dấu cách và ít hơn 50
                              kí tự{" "}
                            </span>
                          )}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="eaddress">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control form-control-lg"
                        ref={register({
                          required: true,
                          pattern: /^\S[a-z0-9A-Z]{0,50}.gmail.com$/i,
                        })}
                      />
                      <small id="imageHelp" className="form-text text-danger">
                        {errors.email && errors.email.type === "required" && (
                          <span>Không để trống email </span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                          <span>Email đúng định dạng xxx@gmail.com</span>
                        )}
                      </small>
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="tel">Tel. Number</label>
                      <input
                        type="text"
                        name="tel"
                        className="form-control form-control-lg"
                        ref={register({
                          required: true,
                          pattern: /^[0-9]{10}$/i,
                        })}
                      />
                      <small id="imageHelp" className="form-text text-danger">
                        {errors.tel && errors.tel.type === "required" && (
                          <span>Không để trống SDT </span>
                        )}
                        {errors.tel && errors.tel.type === "pattern" && (
                          <span>SDT bắt đầu bằng số 0 gồm 10 kí tự từ 0-9</span>
                        )}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        cols={30}
                        rows={10}
                        className="form-control"
                        defaultValue={""}
                        ref={register({
                          required: true,
                          pattern: /^\S{1}.{0,500}$/i,
                        })}
                      />
                      <small id="imageHelp" className="form-text text-danger">
                        {errors.message &&
                          errors.message.type === "required" && (
                            <span>Không để trống message </span>
                          )}
                        {errors.message &&
                          errors.message.type === "pattern" && (
                            <span>Message ít hơn 500 kí tự</span>
                          )}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary mr-2">
                        Gửi đi
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-5 ml-auto">
                <div className="mb-3 bg-white">
                  <h3 className="mb-5 text-black">Contact Info</h3>
                  <p className="mb-0 font-weight-bold text-black">Address</p>
                  <p className="mb-4 text-black">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                  <p className="mb-0 font-weight-bold text-black">Phone</p>
                  <p className="mb-4">
                    <a href="#">+1 232 3235 324</a>
                  </p>
                  <p className="mb-0 font-weight-bold text-black">
                    Email Address
                  </p>
                  <p className="mb-0">
                    <a href="#">youremail@domain.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-bg style-1"
          style={{ backgroundImage: 'url("/dist/images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center mx-auto">
                <span className="caption text-white">Testimonials</span>
                <h2 className=" text-center mb-5 text-white">
                  Happy <strong>Clients</strong>
                </h2>
              </div>
            </div>
            <div className="owl-slide owl-carousel owl-testimonial">
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_1.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_3.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
