import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useGetProductsQuery } from "../../redux/productApi";
import { useDeleteProductMutation } from "../../redux/productApi";
import ProductEditModel from "../product-edit-model/ProductEditModel";
import ProductLoading from "../product-loading/ProductLoading";

const ManageProduct = () => {
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const { data, isLoading: loading } = useGetProductsQuery();
  const productItems = data?.map((item) => (
    <div key={item?.id} className="product__card">
      <div className="product__img">
        <img src={item?.image} alt={item?.title} />
      </div>
      <div className="product__heading">
        <h3 className="product__title">{item?.title}</h3>
        <h4 className="product__price">$ {item?.price}</h4>
      </div>
      <div className="product__rating">
        {Array(Math.round(item?.rating) <= 5 ? Math.round(item?.rating) : 5)
          .fill("")
          .map((_, inx) => (
            <FaStar key={inx} className="product__star" />
          ))}
      </div>
      <p title={item?.description} className="product__desc">
        {item?.description}
      </p>
      <div className="btns">
        <button onClick={() => deleteProduct(item?.id)}>
          {isLoading ? "Loading..." : "Delete"}
        </button>
        <button onClick={() => setEditProduct(item)}>Edit</button>
      </div>
    </div>
  ));
  return (
    <>
      {loading ? (
        <ProductLoading />
      ) : (
        <div className="product__wrapper">{productItems}</div>
      )}
      {editProduct ? (
        <ProductEditModel editProduct={editProduct} setData={setEditProduct} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ManageProduct;
