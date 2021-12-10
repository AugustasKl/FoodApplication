import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
const MealItem =(props)=>{
    const cartCTX= useContext(CartContext)
    // console.log(cartCTX);
    const addToCarthandler=(amount)=>{
        cartCTX.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }

    const price=`$${props.price.toFixed(2)}`
    return(
        <li className={classes.meal}>
           <div>
               <h3>{props.name}</h3>
               <div className={classes.description}>{props.description}</div>
               <div className={classes.price}>{price}</div>
           </div> 
           <div>
            <MealItemForm id={props.id} onAddtocart={addToCarthandler}/>
           </div>
        </li>
    )
}

export default MealItem