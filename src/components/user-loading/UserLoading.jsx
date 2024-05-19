import React from "react";

const UserLoading = () => {
  return (
    <div className="user__loading__wrapper">
      {Array(4)
        .fill("")
        .map((_, inx) => (
          <div key={inx} className="user__loading__card">
            <div className="user__loading__card__img"></div>
            <div className="user__loading__card__name"></div>
            <div className="user__loading__card__age"></div>
            <div className="user__loading__card__email"></div>
          </div>
        ))}
    </div>
  );
};

export default UserLoading;
