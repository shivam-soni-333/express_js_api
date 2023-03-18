const express = require("express");
const connectdb = require("./config/db_connection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require('dotenv').config()

connectdb();

const app = express();  
const port = process.env.PORT||5000;
app.use(express.json());
app.use("/products",require("./routes/generalRoutes"));
app.use("/category",require("./routes/categoryRoutes"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server running on ${port}`);
});
