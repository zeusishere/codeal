//we have installed express prior doing anything else
const express= require("express") ;
// requiring mongoose.js ie setting up server for setting up server before creating an express instance
const mongoose=require("./config/mongoose.js")
// require Tasks collection from models/task.js
const Tasks = require('./models/task');

const app = express();
const port=8000;

/*we will use all middlewares below this section */
//setting up a separate router 
app.use("/",require("./routes/index.js"));
//setting up the template engine
app.set("view engine", 'ejs') ;
//setting up directory for views 
app.set('views','./views') ;
//setting up static folder
app.use(express.static("static"));

//listening to requests made from the browser
app.listen(port,function(err)
{
    if(err)
    {
        console.log(`error : ${err}`) ;
        return ;
    }
    console.log(`server is running on ${port}`) ;
} ) ;