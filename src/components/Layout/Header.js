import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartBtn from './HeaderCartBtn'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>AsianMeals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table of food" />
      </div>
    </>
  )
}
export default Header
