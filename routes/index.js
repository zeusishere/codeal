//requiring the same instance of express as codeial/index.js
const express = require("express");
const  router = express.Router() ;
const homeController = require("../controllers/home_controller");

/* // to check this file is correctly required in index.js codeal
console.log("codeal/index.js has successfully required ./routes/index.js ") 
*/
console.log("codeal/index.js has successfully required ./routes/index.js ") ;


/*Actions  */
router.get('/',homeController.home) ;
module.exports = router ;