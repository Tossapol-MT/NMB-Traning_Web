const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require("./api/api_test1")




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false,}))
app.use(express.static(path.join(__dirname, "./files")))
app.use(cors())


app.use("/",router)
// app.use("/test", require("./api/api_testdata"))
app.use("/emp", require("./api/api_employee"))
app.use("/api", require("./api/api_test1"))

app.listen(2005, () => {
    console.log("Backend is running...")
})
