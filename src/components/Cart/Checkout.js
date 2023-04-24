import { useRef, useState } from 'react'
import classes from './Checkout.module.css'

//helper functions
const isEmpty = (value) => value.trim() === ''
const isNotFiveChars = (value) => value.trim().length !== 5

const Checkout = (props) => {
  const [formInputValidity, setformInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postCode: true,
  })
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostCode = postCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostCodeIsValid = !isNotFiveChars(enteredPostCode)

    setformInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postCode: enteredPostCodeIsValid,
      city: enteredCityIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostCodeIsValid

    if (!formIsValid) {
      return
    }
    //submit cart data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postCode: enteredPostCode,
      city: enteredCity,
    })
  }

  const namedControlClasses = `${classes.control} ${
    formInputValidity.name ? '' : classes.invalid
  }`
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? '' : classes.invalid
  }`
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? '' : classes.invalid
  }`
  const postCodeControlClasses = `${classes.control} ${
    formInputValidity.postCode ? '' : classes.invalid
  }`

  return (
    <form onSubmit={confirmHandler}>
      <div className={namedControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street"> Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>please enter a valid street</p>}
      </div>
      <div className={postCodeControlClasses}>
        <label htmlFor="postCode">Post code</label>
        <input type="text" id="postCode" ref={postCodeInputRef} />
        {!formInputValidity.postCode && <p>please enter a valid post code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  )
}
export default Checkout
