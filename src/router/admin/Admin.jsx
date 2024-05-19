import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default Admin;
