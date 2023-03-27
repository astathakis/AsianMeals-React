import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartBtn.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext)
  /*============================================================
  use reduce method to transform an array to a single value

  adding an item into the items array / amount is the 
  actual number of items and not the length of the array
  ==========================================================*/
  const numOfCartItems = cartCtx.items.reduce((tot, curr) => {
    return tot + curr.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  )
}
export default HeaderCartBtn
