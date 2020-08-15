import React from "react";
import PropTypes from "prop-types";
import Categories from "../Categories";

const Dashboard = ({ products, posts, cateposts, categories }) => {
  const qtyPro = products.length;
  const qtyPost = posts.length;
  const qtyCatePost = cateposts.length;
  const qtyCatePro = categories.length;
  return (
    <div className="row">
      {/* Earnings (Monthly) Card Example */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Bài viết
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {qtyPost}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Earnings (Monthly) Card Example */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Danh mục bài viết
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {qtyCatePost}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Earnings (Monthly) Card Example */}

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Sản phẩm
                </div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      {qtyPro}
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pending Requests Card Example */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Danh mục sản phẩm
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {qtyCatePro}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-comments fa-2x text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
