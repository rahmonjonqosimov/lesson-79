import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./router/admin/Admin";
import CreateProduct from "./components/create-product/CreateProduct";
import CreateUser from "./components/create-user/CreateUser";
import ManageProduct from "./components/manage-product/ManageProduct";
import ManageUser from "./components/manage-user/ManageUser";
import "./App.css";
import "./sass/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="product-create" element={<CreateProduct />} />
          <Route path="user-create" element={<CreateUser />} />
          <Route path="product-manage" element={<ManageProduct />} />
          <Route path="user-manage" element={<ManageUser />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
