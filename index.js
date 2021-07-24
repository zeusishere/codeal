//we have installed express prior doing anything else
const express= require("express") ;
const app = express();
const port=8000;

/*we will use all middlewares below this section */
//setting up a separate router 
app.use("/",require("./routes/index.js"))

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