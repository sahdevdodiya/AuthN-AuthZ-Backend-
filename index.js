//start server

const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

require("../Auth App/config/database").connect();

//route import and mount
const user = require("../Auth App/routes/user");
app.use("/api/v1", user);

//activation
app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
})

//deffalte route
app.get((req,res) => {
    res.send("wlc to home page");
}) 