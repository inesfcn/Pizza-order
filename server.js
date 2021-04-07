const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const cors = require("cors")
const ordersRouter = require("./routers/ordersRouter");
const customersRouter = require("./routers/customersRouter");
const pizzasRouter = require("./routers/pizzasRouters");

app.use(express.json());
app.use(cors());

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
} )

const mongoConnect = "mongodb+srv://ifcn:ines@cluster0.g5xbv.mongodb.net/pizza_db?retryWrites=true&w=majority"

mongoose.connect(mongoConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true,
})
.then(()=>console.log("Connection to cloud database establised"))
.catch((err)=>console.log("[ERROR] connection failed", err))

app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.use("/orders", ordersRouter);
app.use("/customers", customersRouter);
app.use("/pizzas", pizzasRouter);

app.use(function errorHandler(err, req, res, next) {
    res.status(err.status || 500).send({
      error: {
        message: err.message,
      },
    });
  });