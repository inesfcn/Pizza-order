import React from "react";
import wallpaper from "../assets/pizza_signup.jpg";
import { useForm } from "react-hook-form";
import { signupCustomer } from "../helpers/apiCalls"


const Signup = () =>{
    const { register, handleSubmit } = useForm();

    const onSubmit = async (signupData) =>{
        let res = await signupCustomer(signupData);
        console.log(res);
    }     


    return(
        <main style={{backgroundImage:`url(${wallpaper})`}}> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Signup</h1>
                <input type="text" name="firstname" placeholder="First Name" ref={register({required: true})}/>

                <input type="text" name="lastname" placeholder="Last Name" ref={register({required: true})}/>

                <input type="email" name="email" placeholder="Email" ref={register({required: true})}/>

                <input type="password" name="password" placeholder="Pasword" ref={register({required: true})}/>

                <h4>Adress</h4>
                <input type="text" name="StreetNr" placeholder="Street and Number" ref={register({required: true})}/>

                <input type="text" name="city" placeholder="City" ref={register({required: true})}/>

                <input type="text" name="country" defaultValue="Germany" ref={register()}/>

                <button type="submit">Signup</button>
            </form>
        </main>
    )
}
export default Signup;