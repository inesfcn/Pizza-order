import axios from "axios";
axios.defaults.baseURL = `http://localhost:5000`;

export const signupCustomer = async (signupData) =>{
    console.log("Signing up customer:", signupData);
    try{
        const response = await axios.post("/customers", signupData);
        return response;
    }catch(err){
        return err.response && err.response.data;
    }
}

export const loginCustomer = async (loginData)=> {
    try{
        const res = await axios.post("/customers/login", loginData);
        return res;
    }catch(err){
        return err.response && err.response.data;
    }
}

export const getPizzas = async () =>{
    try{
        const res = await axios.get("/pizzas");
        return res;
    }catch(err){
        return err.response && err.response.data;
    }
}