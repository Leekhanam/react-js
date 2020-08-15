import React from "react";
import { Link } from "react-router-dom";

const ContactAdmin = ({ contacts, onRemove }) => {
  function removeElement(id) {
    onRemove(id);
  }
  return (
    <div>
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Contacts</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive mt-3">
              <table
                className="table table-striped"
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">Fullname</th>
                    <th scope="col">Email</th>
                    <th scope="col">SDT</th>
                    <th scope="col">Ghi chú</th>
                    <th scope="col">Tùy chọn</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(
                    ({ id, name, fullname, email, tel, message }, index) => (
                      <tr id={"row-" + id} key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{name}</td>
                        <td>{fullname}</td>
                        <td>{email}</td>
                        <td>{tel}</td>
                        <td>{message}</td>
                        <td>
                          <button
                            onClick={() => removeElement(id)}
                            type=" button"
                            className="btn btn-danger"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactAdmin.propTypes = {};

export default ContactAdmin;
