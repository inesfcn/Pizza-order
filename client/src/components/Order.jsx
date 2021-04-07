import React, { useEffect, useState } from "react";
import Margherita from "../assets/pizza.png";
import Buffalina from "../assets/pizza(1).png";
import Bianca from "../assets/pizza(3).png";
import salsicia from "../assets/pizza(4).png";
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

    const pizzaList = pizzas.map((pizza, idx)=>{
        return(
            <div className="pizza-container" key={pizza._id}>
                <img src={pizza.name} alt={pizza.name}/>
                <h2>{pizza.name}</h2>
                <h5>{pizza.price}</h5>
                <button name="tomato">Add</button>
            </div>
        )
    })

    return(
        <div className="order">
            <h1>
                Order our amazing Pizzas
            </h1>
            <h3>Every Pizza can be made with vegan cheese</h3>
            <div className="order-images">
                {pizzaList}
            </div>
        </div>
    )
}

export default Order;