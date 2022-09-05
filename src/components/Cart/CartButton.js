import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux/es/exports";
import { uiActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartButton = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={cartButton}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
