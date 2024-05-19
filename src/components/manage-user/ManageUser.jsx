import React, { useState } from "react";
import { useGetUserQuery } from "../../redux/userApi";
import { useDeleteUserMutation } from "../../redux/userApi";
import UserEditModel from "../user-edit-model/UserEditModel";
import UserLoading from "../user-loading/UserLoading";
const ManageUser = () => {
  const { data, isLoading: loading } = useGetUserQuery();
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const productItems = data?.map((item) => (
    <div key={item?.id} className="user__card">
      <div className="user__img">
        <img src={item?.image} alt={item?.title} />
      </div>
      <div className="user__heading">
        <h3 className="user__title">
          {item?.fname} {item?.lname}
        </h3>
      </div>
      <h4 className="user__age"> {item?.age} years old</h4>
      <p className="user__email">{item?.email}</p>
      <div className="btns">
        <button onClick={() => deleteUser(item?.id)} disabled={isLoading}>
          {isLoading ? "Loading..." : "Delete"}
        </button>
        <button onClick={() => setEditUser(item)}>Edit</button>
      </div>
    </div>
  ));
  return (
    <>
      {loading ? (
        <UserLoading />
      ) : (
        <div className="user__wrapper">{productItems}</div>
      )}
      {editUser ? (
        <UserEditModel setData={setEditUser} editUser={editUser} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ManageUser;
