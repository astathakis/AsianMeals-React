import { useState, useRef } from 'react'
import Input from '../../UI/Input'
import classes from './MealsItemForm.module.css'

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value
    //value comes always as string so
    const enteredAmountNum = +enteredAmount
    //validation on amount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false)
      return
    }
    props.onAddToCart(enteredAmountNum)
  }

  //using refs instead of two-way-binding
  //custom component ref needs workout
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}
export default MealsItemForm
