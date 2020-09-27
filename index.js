const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const menus = require("./routes/api/v1/menus.js")

//routes
app.use("/routes/api/v1/menus", menus);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})