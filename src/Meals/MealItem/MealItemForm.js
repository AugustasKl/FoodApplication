import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
    const[amountIsValid, setAmountISValid]=useState(true)

  const amountInputRef = useRef();
//   console.log(amountInputRef);
  const submithandler = (event) => {
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value

    const enteredAmountNumber =+enteredAmount
    // console.log(enteredAmount);
    if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
        setAmountISValid(false)
        return
  };
  props.onAddtocart(enteredAmountNumber)
}

  return (
    <form className={classes.form} onSubmit={submithandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p> Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
