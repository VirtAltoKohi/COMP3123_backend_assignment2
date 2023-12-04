const express = require("express")
const mongoose = require("mongoose")
const userRoute = require("./routes/userRoutes")
const employeeRoute = require("./routes/employeeRoutes")

const port = process.env.PORT || 3001

const app = express()

const DB_CONNECTION_STRING = "mongodb+srv://admin:EAiTTU4Y4DWz99yU@cluster0.sa8fxfy.mongodb.net/f2023_comp3123?retryWrites=true&w=majority"

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(DB_CONNECTION_STRING, {
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