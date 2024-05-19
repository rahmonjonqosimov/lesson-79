import React, { useState, useEffect } from "react";
import { useCreateUserMutation } from "../../redux/userApi";
import { toast } from "react-toastify";
const initialState = {
  fname: "",
  lname: "",
  age: "",
  email: "",
  addres: "",
};

const CreateUser = () => {
  const [newUser, setNewUser] = useState(initialState);
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("User created successfully");
      setNewUser(initialState);
    }
  }, [isSuccess]);

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    createUser(newUser);
  };

  return (
    <form onSubmit={handleNewUserSubmit} className="create__product__form">
      <label htmlFor="fname">Last Name *</label>
      <input
        value={newUser.fname}
        onChange={(e) => setNewUser((p) => ({ ...p, fname: e.target.value }))}
        type="text"
        placeholder="Last Name *"
        id="fname"
        required
      />
      <label htmlFor="lname">First Name *</label>
      <input
        value={newUser.lname}
        onChange={(e) => setNewUser((p) => ({ ...p, lname: e.target.value }))}
        type="text"
        placeholder="First Name *"
        id="lname"
        required
      />
      <label htmlFor="age">Age *</label>
      <input
        value={newUser.age}
        onChange={(e) => setNewUser((p) => ({ ...p, age: e.target.value }))}
        type="number"
        placeholder="Age *"
        id="age"
        required
      />
      <label htmlFor="email">Email *</label>
      <input
        value={newUser.email}
        onChange={(e) => setNewUser((p) => ({ ...p, email: e.target.value }))}
        type="email"
        placeholder="Email *"
        id="email"
        required
      />
      <label htmlFor="addres">Addres *</label>
      <textarea
        value={newUser.addres}
        onChange={(e) => setNewUser((p) => ({ ...p, addres: e.target.value }))}
        name="addres"
        rows={4}
        id="addres"
        placeholder="Addres *"
        required
      ></textarea>
      <button disabled={isLoading}>{isLoading ? "Loading..." : "Add"}</button>
    </form>
  );
};

export default CreateUser;
