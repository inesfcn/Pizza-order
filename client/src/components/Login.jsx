import React, { useState } from "react";
import wallpaper from "../assets/pizza_signup.jpg";
import { useForm } from "react-hook-form";
import { loginCustomer } from "../helpers/apiCalls"


const Signup = () =>{
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState()

    const onSubmit = async (loginData) =>{
        let res = await loginCustomer(loginData)
        if(res.error){
            setError(res.error)
        }
    }

    return(
        <main style={{backgroundImage:`url(${wallpaper})`}}> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <input type="email" name="email" placeholder="Email" ref={register({required: true})}/>
                <input type="password" name="password" placeholder="Password" ref={register({required: true})}/>
                <button type="submit">Login</button>
                {error && <span>{error.message}</span> }
            </form>
        </main>
    )
}
export default Signup;