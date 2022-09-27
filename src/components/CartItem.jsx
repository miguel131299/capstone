import { Context } from "../Context";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeImgFromCart } = useContext(Context);

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeImgFromCart(item)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
