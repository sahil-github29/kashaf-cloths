import React, { useContext } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectItemsCount } from "../../redux/cart/cart.selector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import CartContext from "../../contexts/cart/cart.context";

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

/* const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
}); */

/* we replaced the above code with "selectItemsCount Selector" which uses memoization.
 it means if the props is not changed, this component willl not re-render 
*/
const mapStateToProps = state => ({
  itemCount: selectItemsCount(state)
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
