import React, { useState, useEffect } from "react";
import { useCreateProductMutation } from "../../redux/productApi";
import { toast } from "react-toastify";
const initialState = {
  title: "",
  price: "",
  rating: "",
  description: "",
};

const CreateProduct = () => {
  const [createProduct, { isLoading, isSuccess }] = useCreateProductMutation();
  const [newProduct, setNewProduct] = useState(initialState);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Product created successfully");
      setNewProduct(initialState);
    }
  }, [isSuccess]);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    createProduct(newProduct);
  };

  return (
    <form onSubmit={handleCreateProduct} className="create__product__form">
      <label htmlFor="title">Title *</label>
      <input
        value={newProduct.title}
        onChange={(e) =>
          setNewProduct((p) => ({ ...p, title: e.target.value }))
        }
        type="text"
        placeholder="Title"
        id="title"
        required
      />
      <label htmlFor="price">Price *</label>
      <input
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct((p) => ({ ...p, price: e.target.value }))
        }
        type="number"
        placeholder="Price"
        id="price"
        required
      />
      <label htmlFor="rating">Rating *</label>
      <input
        value={newProduct.rating}
        onChange={(e) =>
          setNewProduct((p) => ({ ...p, rating: e.target.value }))
        }
        type="number"
        placeholder="Rating"
        id="rating"
        required
      />
      <label htmlFor="description">Description *</label>
      <textarea
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct((p) => ({ ...p, description: e.target.value }))
        }
        name="description"
        rows={4}
        id="description"
        required
      ></textarea>
      <button disabled={isLoading}>{isLoading ? "Loading..." : "Add"}</button>
    </form>
  );
};

export default CreateProduct;
