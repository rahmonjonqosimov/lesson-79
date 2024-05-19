import React, { useEffect } from "react";
import { useUpdateUserMutation } from "../../redux/userApi";
import { toast } from "react-toastify";

const UserEditModel = ({ setData, editUser }) => {
  const [updateUser, { isSuccess, isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("User updated successfully");
      setData(null);
    }
  }, [isSuccess]);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const user = {
      fname: editUser.fname,
      lname: editUser.lname,
      age: editUser.age,
      email: editUser.email,
      addres: editUser.addres,
    };
    updateUser({ body: user, id: editUser.id });
  };
  return (
    <>
      <div onClick={() => setData(null)} className="edit__overlay"></div>
      <form onSubmit={handleUpdateUser} className={`edit__form`}>
        <label htmlFor="fname">Last Name *</label>
        <input
          value={editUser?.fname}
          onChange={(e) => setData((p) => ({ ...p, fname: e.target.value }))}
          type="text"
          placeholder="Last Name *"
          id="fname"
          required
        />
        <label htmlFor="lname">First Name *</label>
        <input
          value={editUser?.lname}
          onChange={(e) => setData((p) => ({ ...p, lname: e.target.value }))}
          type="text"
          placeholder="First Name *"
          id="lname"
          required
        />
        <label htmlFor="age">Age *</label>
        <input
          value={editUser?.age}
          onChange={(e) => setData((p) => ({ ...p, age: e.target.value }))}
          type="number"
          placeholder="Age *"
          id="age"
          required
        />
        <label htmlFor="email">Email *</label>
        <input
          value={editUser?.email}
          onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
          type="email"
          placeholder="Email *"
          id="email"
          required
        />
        <label htmlFor="addres">Addres *</label>
        <textarea
          value={editUser?.addres}
          onChange={(e) => setData((p) => ({ ...p, addres: e.target.value }))}
          name="addres"
          rows={4}
          id="addres"
          placeholder="Addres *"
          required
        ></textarea>
        <button disabled={isLoading}>
          {" "}
          {isLoading ? "Loading..." : "Save"}
        </button>
        <button
          type="button"
          onClick={() => setData(null)}
          style={{ marginTop: "10px" }}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default UserEditModel;
