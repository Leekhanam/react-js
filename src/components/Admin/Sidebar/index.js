import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* Sidebar - Brand */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>
    {/* Divider */}
    <hr className="sidebar-divider my-0" />
    {/* Nav Item - Dashboard */}
    <li className="nav-item">
        <Link className="nav-link" to="/">
        <i className="fas fa-fw fa-tachometer-alt" />
          <span>View Home</span>
        </Link>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    {/* Heading */}
    <div className="sidebar-heading">
    
    </div>
    {/* Nav Item - Pages Collapse Menu */}

    <li className="nav-item">
      
        <Link className="nav-link" to="/admin/" className="nav-link collapsed">
          <span>Tổng quan</span>
        </Link>
      </li>
    <li className="nav-item">
    <Link className="nav-link collapsed" to="/admin/products">
          <span>Quản lí Sản phẩm</span>
        </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link collapsed" to="/admin/categories">
          <span>Danh mục sản phẩm</span>
        </Link>
    
    </li>
    <li className="nav-item">
    <Link className="nav-link collapsed" to="/admin/posts">
          <span>Bài viết</span>
        </Link>
        </li>
    <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/cate-post">
          <span>Danh mục bài viết</span>
        </Link>
      
        <Link className="nav-link collapsed" to="/admin/contact">
          <span>Contact</span>
        </Link>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
  }

Sidebar.propTypes = {};

export default Sidebar;
