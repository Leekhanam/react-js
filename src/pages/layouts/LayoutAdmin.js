import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/TopBar";
import Footer from "../../components/Admin/Footer";
import Products from "../../pages/views/Admin/Products";
import Categories from "../../pages/views/Admin/Categories";
import DetailProduct from "../../pages/views/Admin/DetailProduct";
import AddForm from "../../pages/views/Admin/AddForm";
import EditProduct from "../../pages/views/Admin/EditProduct";
import Dashboard from "../../pages/views/Admin/Dashboard";
import "../../assets/css/admin/sb-admin-2.min.scss";
import "../../assets/css/admin/main.scss";
import axios from "axios";
import productApi from "../../api/productApi";
import cateApi from "../../api/cateApi";
import catepostApi from "../../api/catepostApi";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import AddCategory from "../views/Admin/AddCategory";
import EditCategory from "../views/Admin/EditCategory";
import CatePost from "../../pages/views/Admin/CatePost";
import AddCatePost from "../../pages/views/Admin/AddCatePost";

//post
import Posts from "../../pages/views/Admin/Posts";
import PostsApi from "../../api/PostsApi";
import AddPosts from "../views/Admin/AddPosts";
import EditPosts from "../../pages/views/Admin/EditPosts";

//cate posst
import EditCatePost from "../views/Admin/EditCatePost";

//contact
import contactApi from "../../api/contactApi";
import Contact from "../../pages/views/Main/Contact";
import ContactAdmin from "../views/Admin/ContactAdmin";

export default ({ children }) => {
 

  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [cateposts, setcateposts] = useState([]);
  const [posts, setposts] = useState([]);
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productApi.getAll();
        setproducts(data);
      } catch (error) {}
    };
    getProducts();
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

  const removeProduct = (id) => {
    console.log(id);
    const newData = products.filter((product) => product.id !== id);
    console.log(newData);
    setproducts(newData);
    productApi.remove(id);
    alert("Bạn chắc chắn muốn xóa sản phẩm này");
  };

  const onHandleAdd = (product) => {
    console.log(product);
    setproducts([...products, product]);
    productApi.create(product);
  };

  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(
      (product) => (product.id === updateProduct.id ? updateProduct : product) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    setproducts(newProducts);
    productApi.update(updateProduct.id, updateProduct);
    //console.log(updateProduct.id);
  };

  const onUpdateCategory = (updateCategory) => {
    const newCategorys = categories.map(
      (category) =>
        category.id === updateCategory.id ? updateCategory : category // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    setcategories(newCategorys);
    cateApi.update(updateCategory.id, updateCategory);
    //console.log(updateProduct.id);
  };

  const onHandleAddCategory = (category) => {
    console.log(category);
    setcategories([...categories, category]);
    cateApi.create(category);
    console.log(category);
  };

  const removeCategory = (id) => {
    console.log(id);
    const newData = categories.filter((cate) => cate.id !== id);
    console.log(newData);
    setcategories(newData);
    cateApi.remove(id);
    alert("Xóa danh mục thành công");
  };
  // danh mục bài viết
  const Addcatepost = (catepost) => {
    setcateposts([...cateposts, catepost]);
    catepostApi.create(catepost);
  };

  const removeCatepost = (id) => {
    const newData = cateposts.filter((catepost) => catepost.id !== id);
    setcateposts(newData);
    catepostApi.remove(id);
    alert("Xóa danh mục bài viết thành công");
  };
  const onUpdateCatePost = (updateCatePost) => {
    const newCatePost = cateposts.map(
      (catepost) =>
        catepost.id === updateCatePost.id ? updateCatePost : catepost // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    setcateposts(newCatePost);
    catepostApi.update(updateCatePost.id, updateCatePost);
  };

  //bai viet
  const removePosts = (id) => {
    console.log(id);
    const newData = posts.filter((posts) => posts.id !== id);
    console.log(newData);
    setposts(newData);
    PostsApi.remove(id);
    alert("Bạn chắc chắn muốn xóa sản phẩm này");
  };
  const Addposts = (post) => {
    console.log(post);

    setposts([...posts, post]);

    PostsApi.create(post);
    console.log(PostsApi);
  };
  const onUpdatePosts = (updatePosts) => {
    const newPosts = posts.map(
      (post) => (post.id === updatePosts.id ? updatePosts : post) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    setposts(newPosts);
    PostsApi.update(updatePosts.id, updatePosts);
  };

  //Contact
  const removeContact = (id) => {
    const newData = contacts.filter((contact) => contact.id !== id);
    setcontacts(newData);
    contactApi.remove(id);
    alert("Xóa contact thành công");
  };
  return (
    <div className="admin-page">
      <Router>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                 
                <Switch>
               
                  <Route exact path="/admin/">
                    
                    <Dashboard
                      products={products}
                      posts={posts}
                      categories={categories}
                      cateposts={cateposts}
                    />
                  </Route>
                  <Route path="/admin/categories">
                    <Categories
                      categories={categories}
                      products={products}
                      onRemove={removeCategory}
                    />
                  </Route>
                  <Route path="/admin/products">
                    <Products
                      products={products}
                      categories={categories}
                      onRemove={removeProduct}
                    />
                  </Route>
                  <Route path="/admin/add-product">
                    <AddForm onAdd={onHandleAdd} categories={categories} />
                  </Route>
                  <Route path="/admin/add-category">
                    <AddCategory
                      onAdd={onHandleAddCategory}
                      products={products}
                      categories={categories}
                    />
                  </Route>
                  <Route path="/admin/detail-product/:id">
                    <DetailProduct products={products} />
                  </Route>
                  <Route path="/admin/edit-product/:id">
                    <EditProduct
                      products={products}
                      onAdd={onHandleUpdate}
                      categories={categories}
                    />
                  </Route>
                  <Route path="/admin/edit-category/:id">
                    <EditCategory
                      categories={categories}
                      onAdd={onUpdateCategory}
                    />
                  </Route>

                  <Route path="/admin/cate-post">
                    <CatePost cateposts={cateposts} onRemove={removeCatepost} />
                  </Route>
                  <Route path="/admin/add-catepost">
                    <AddCatePost onAdd={Addcatepost} />
                  </Route>
                  <Route path="/admin/edit-catepost/:id">
                    <EditCatePost
                      cateposts={cateposts}
                      onAdd={onUpdateCatePost}
                    />
                  </Route>

                  <Route path="/admin/posts">
                    <Posts posts={posts} onRemove={removePosts} />
                  </Route>
                  <Route path="/admin/add-posts">
                    <AddPosts onAdd={Addposts} cateposts={cateposts} />
                  </Route>
                  <Route path="/admin/edit-posts/:id">
                    <EditPosts
                      posts={posts}
                      onAdd={onUpdatePosts}
                      cateposts={cateposts}
                    />
                  </Route>
                  <Route path="/admin/contact">
                    <ContactAdmin
                      contacts={contacts}
                      onRemove={removeContact}
                    />
                  </Route>
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};
