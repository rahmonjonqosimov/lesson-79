import React from "react";

const ProductLoading = () => {
  let arr = Array(4).fill("");
  let loading = arr?.map((_, inx) => (
    <div key={inx} className="loading_group_card">
      <div className="loading_group_card_img"></div>
      <div className="loading_group_card_full_content"></div>
      <div className="loading_group_card_half_content"></div>
      <div className="loading_group_card_bottom">
        <div className="loading_group_card_bottom_price"></div>
        <div className="loading_group_card_bottom_circle"></div>
      </div>
    </div>
  ));
  return (
    <section class="loading">
      <div class="loading_group">{loading}</div>
    </section>
  );
};

export default ProductLoading;
