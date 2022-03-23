import { connect } from "react-redux";
import { addToCart, removeToCart } from "../redux/actions/AddToCartAction";
import AddToCartModal from "../components/ui/AddToCartModal";

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartModal);
