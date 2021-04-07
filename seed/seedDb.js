const mongoose = require("mongoose");
const Customer = require("../models/Customer");
const faker = require("faker");
const Order = require("../models/Order");
const Pizza = require("../models/Pizza");

(async function (){

    const mongoConnect = "mongodb+srv://ifcn:ines@cluster0.g5xbv.mongodb.net/pizza_db?retryWrites=true&w=majority"

    mongoose.connect(mongoConnect, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex:true,
    });
    mongoose.connection.on('error', () => console.log('Can not connect to the DB'));
    mongoose.connection.on('open', () => console.log('Connected to the database....'));

    //Clear customers
    try{
        await Customer.deleteMany({});
        console.log("Customers collection cleared");
    }catch(err){
        console.log(err);
    }

    //Clear Orders
    try{
        await Order.deleteMany({});
        console.log("Orders collection cleared");
    }catch(err){
        console.log(err);
    }

    //Clear Pizzas
    try{
        await Pizza.deleteMany({});
        console.log("Pizzas collection cleared");
    }catch(err){
        console.log(err);
    }

    //Construct 2 fake Customers
    const customersPromises = Array(2)
        .fill(null)
        .map(()=>{
            const customerData ={
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
                adress:{
                    StreetNr : faker.address.streetName(),
                    city: faker.address.city(),
                    country: faker.address.country(),
                }
            };
            const customer = new Customer(customerData);
            return customer.save();
            })
    
    let customersSeeded

    try{
        customersSeeded = await Promise.all(customersPromises);
        console.log("We stored 2 Customer in the DB");
    }catch(error){
        console.log(error);
    }

    //Create 3 Pizzas
    const pizzaPromises = Pizza.insertMany([
        {
        name: "Margherita",
        price: "7€"
        },{
        name: "Buffalina",
        price: "9€"
        },{
        name: "Bianca",
        price: "9€"
        }
    ])

    let pizzasSeeded;

    try{
        pizzasSeeded = await pizzaPromises;
        console.log("Created 3 pizzas");
    }catch(err){
        console.log(err);
    }

    //Create todo with the customer and pizzas inside
    const pizzaIds = pizzasSeeded.map(pizza=>pizza._id)

    const customerIds = customersSeeded.map(customer=>customer._id);

    const orderPromises = Array(2)
        .fill(null)
        .map(()=>{
            const orderData = {
                order_data: faker.date.recent(),
                userId: faker.random.arrayElement(customerIds),
                pizzas: faker.random.arrayElement(pizzaIds)
            }
            const order = new Order(orderData);
            return order.save();
        })
    
    try{
        await Promise.all(orderPromises);
        console.log("We stored 2 orders in the DB");
    }catch(error){
        console.log(error);
    }

    

    mongoose.connection.close();
})();


