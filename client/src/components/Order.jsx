import React, { useEffect, useState } from "react";
import { getPizzas } from "../helpers/apiCalls"

const Order = () =>{

    const [pizzas, setPizzas] = useState([])

    useEffect(()=>{
        const get = async () =>{
            let pizzasData = await getPizzas();
            setPizzas(pizzasData.data)    
        }
        get();
    },[])

    const increment = (e) =>{
        setPizzas(pizzas.map((pizza)=>{
         if(pizza.name===e.target.name && pizza.quantity!== undefined){
           return {...pizza, quantity:(pizza.quantity+=1)}
         }else if(pizza.name===e.target.name && pizza.quantity=== undefined){
           return {...pizza, quantity:1}
         }else{
           return pizza
         }
        }))
    }
    
    const decrement = e =>{
        setPizzas(pizzas.map((pizza)=>{
            if(pizza.name===e.target.name && pizza.quantity>0){
                return {...pizza, quantity:(pizza.quantity-=1)}
              }else{
                  return pizza
              }
        }))
    }


    const pizzaList = pizzas.map((pizza)=>{
        return(
            <div className="pizza-container" key={pizza._id}>
                <img src={pizza.img} alt="pizza icon"/>
                <div className="desc-container">
                    <h2>{pizza.name}</h2>
                    <h5>{pizza.price}</h5>
               </div>
                <button name="tomato" name={pizza.name} onClick={increment}>Add</button>
            </div>
        )
    })

    const pizzasAdded = pizzas.filter((pizza)=> pizza.quantity)


    const pizzasAddedList = pizzasAdded.map((pizza)=>{
        return(
            <div className="pizza-added-container" key={pizza._id}>
                <p><b>{pizza.name}</b> | {pizza.quantity} <button onClick={increment} name={pizza.name}>+</button><button name={pizza.name} onClick={decrement}>-</button></p>
            </div>
        )
    })
    console.log(pizzas);
    console.log(pizzasAdded);

    return(
        <div className="order">
            <h1>
                Order our amazing Pizzas
            </h1>
            <h3>Every Pizza can be made with vegan cheese</h3>
          <div className="orders-container">
                <div className="pizzas-container">
                    {pizzaList}
                </div>
                {pizzasAdded.length>0 &&
                <div className="modal-ordered">
                     {pizzasAddedList}
                     <button className="order-btn">Order</button>
                </div>}
          </div>
        </div>
    )
}

export default Order;