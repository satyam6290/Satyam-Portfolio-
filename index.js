const express = require("express");
const app = express();
let port = 8080;


app.listen(port, () =>{
    console.log(`port is listening at:${port}`);
});