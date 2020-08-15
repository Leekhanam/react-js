import React, { useState, useEffect } from "react";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
import Home from "../../pages/views/Main/Home";

import About from "../../pages/views/Main/About";
import Buy from "../../pages/views/Main/Buy";
import Contact from "../../pages/views/Main/Contact";
import Sell from "../../pages/views/Main/Sell";
import Shop from "../../pages/views/Main/Shop";
import DetailProduct from "../../pages/views/Main/DetailProduct";
import ProCate from "../../pages/views/Main/ProCate";
import Blog from "../../pages/views/Main/Blog";




import apiRequest from "../../api/productApi";
import productApi from "../../api/productApi";
import cateApi from "../../api/cateApi";
import catepostApi from "../../api/catepostApi";
import PostsApi from "../../api/PostsApi";
import contactApi from "../../api/contactApi";
import {BrowserRouter as Router, Switch,Route,Link,useParams,} from "react-router-dom";
import DetailPost from "../views/Main/DetailPost";
import PostCate from "../views/Main/PostCate";

export default ({ children }) => {  
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [cateposts, setcateposts] = useState([]);
  const [posts, setposts] = useState([]);
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setproducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await cateApi.getAll();
        setcategories(data);
      } catch (error) {}
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getCateposts = async () => {
      try {
        const { data } = await catepostApi.getAll();
        setcateposts(data);
      } catch (error) {}
    };
    getCateposts();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await PostsApi.getAll();
        setposts(data);
      } catch (error) {}
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getContact = async () => {
      try {
        const { data } = await contactApi.getAll();
        setcontacts(data);
      } catch (error) {}
    };
    getContact();
  }, []);

  const AddContact = (contact) => {
    setcontacts([...contacts, contact]);
    contactApi.create(contact);
  };
  console.log(cateposts);

 

  return (
    <div className="user-page">
      <Header cateposts={cateposts} />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home products={products} />
          </Route>
          <Route path="/buy">
            <Buy products={products} categories={categories} />
          </Route>
          <Route path="/detail/:id">
            <DetailProduct products={products} />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact contacts={contacts} onAdd={AddContact} />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/blog">
            <Blog posts={posts} cateposts={cateposts} />
          </Route>
          <Route path="/posts/:name">
            <PostCate posts={posts} cateposts={cateposts} />
          </Route>
          <Route path="/detail-blog/:id">
            <DetailPost posts={posts} />
          </Route>
          <Route path="/product/:name">
            <ProCate products={products} categories={categories} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
