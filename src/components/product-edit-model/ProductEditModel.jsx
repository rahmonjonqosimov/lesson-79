import React, { useEffect } from "react";
import { useUpdateProductMutation } from "../../redux/productApi";
import { toast } from "react-toastify";

const ProductEditModel = ({ setData, editProduct }) => {
  const [updateProduct, { isSuccess, isLoading }] = useUpdateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      setData(null);
      toast.success("Product updated successfully");
    }
  }, [isSuccess]);
  const handleEditProduct = (e) => {
    e.preventDefault();
    const product = {
      title: editProduct.title,
      price: editProduct.price,
      rating: editProduct.rating,
      description: editProduct.description,
    };
    updateProduct({ body: product, id: editProduct.id });
  };
  return (
    <div>
      <div onClick={() => setData(null)} className="edit__overlay "></div>
      <form
        onSubmit={handleEditProduct}
        className="edit__wrapper create__product__form"
      >
        <label htmlFor="title">Title *</label>
        <input
          value={editProduct.title}
          onChange={(e) => setData((p) => ({ ...p, title: e.target.value }))}
          type="text"
          placeholder="Title"
          id="title"
          required
        />
        <label htmlFor="price">Price *</label>
        <input
          value={editProduct.price}
          onChange={(e) => setData((p) => ({ ...p, price: e.target.value }))}
          type="number"
          placeholder="Price"
          id="price"
          required
        />
        <label htmlFor="rating">Rating *</label>
        <input
          value={editProduct.rating}
          onChange={(e) => setData((p) => ({ ...p, rating: e.target.value }))}
          type="number"
          placeholder="Rating"
          id="rating"
          required
        />
        <label htmlFor="description">Description *</label>
        <textarea
          value={editProduct.description}
          onChange={(e) =>
            setData((p) => ({ ...p, description: e.target.value }))
          }
          name="description"
          rows={4}
          id="description"
          required
        ></textarea>
        <button>{isLoading ? "Loading..." : "Save"}</button>
        <button onClick={() => setData(null)} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEditModel;
