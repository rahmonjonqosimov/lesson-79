import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  MdOutlineCreateNewFolder,
  MdManageHistory,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import "./Sidebar.css";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const adminLink = [
    {
      id: 1,
      title: "Create Product",
      url: "product-create",
      img: <MdOutlineCreateNewFolder />,
    },
    {
      id: 2,
      title: "Manage Product",
      url: "product-manage",
      img: <MdOutlineManageAccounts />,
    },
    {
      id: 3,
      title: "Create User",
      url: "user-create",
      img: <IoIosCreate />,
    },
    {
      id: 4,
      title: "Manage User",
      url: "user-manage",
      img: <MdManageHistory />,
    },
  ];
  const adminLinkItems = adminLink?.map((item) => (
    <li key={item?.id}>
      <NavLink to={item?.url}>
        {item?.img} <span>{item.title}</span>
      </NavLink>
    </li>
  ));
  return (
    <div className="sidebar__relative">
      <div className={`sidebar ${menu ? "sidebar__show" : ""}`}>
        {/* <div
          onClick={() => setMenu((p) => !p)}
          className={`menu ${menu ? "" : "show"}`}
        >
          <div className="menu__item"></div>
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div> */}
        <span>
          {" "}
          <MdOutlineDashboardCustomize />
          <h2>Admin Dashboard</h2>
        </span>
        <ul>{adminLinkItems}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
