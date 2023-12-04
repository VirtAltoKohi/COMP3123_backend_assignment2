const express = require("express")
const mongoose = require("mongoose")
const userRoute = require("./routes/userRoutes")
const employeeRoute = require("./routes/employeeRoutes")

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/api/v1/user", userRoute)
app.use("/api/v1/emp", employeeRoute)

app.route("/")
    .get((req, res) => {
        res.send("<h1>COMP3123 Assignment 1</h1>")
    })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

module.export = {
    handler: app,
};