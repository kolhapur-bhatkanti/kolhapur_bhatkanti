const { response } = require("express");
const path = require("path");
require("./db/conn");


const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//setting the path
const staticpath = path.join(__dirname, "../public");


//middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/boostrap/dist/css")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/boostrap/dist/js")));

app.use(express.static(staticpath))
app.set("view engine", "hbs");

//routing
app.get("/", (req, res) => {
    res.render("index");
})

//server create
app.listen(port, () => {
    console.log('server is running at port');
});