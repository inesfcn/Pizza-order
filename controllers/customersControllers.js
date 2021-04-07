const Customer = require("../models/Customer");


exports.signupCustomer = async (req, res, next) => {
    const customerData = req.body;
    try {
      const customer = await Customer.create(customerData);
      res.json({customer});
    } catch (err) {
      next(err);
    }
  };

exports.loginCustomer = async (req,res,next)=>{
    const {email, password} = req.body;
    
    try{
        const userFound = await Customer.findOne({email});
        if(!userFound){
            let error = new Error(`Not found user with email ${email}. Try again.`)
            TypeError.status = 401;
            next(error)
        }

        if(password!==userFound.password){
            let error = new Error("Wrong password")
            error.status = 401;
            next(error)
        }else{
            res.json(userFound)
        }
    }catch(err){
        next(err)
    }
}