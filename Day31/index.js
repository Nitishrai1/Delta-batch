const express = require("express");
const app = express();
// console.dir(app);

let port = 8081;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});
