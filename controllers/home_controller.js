//module.exports.<actionName or handler Function name> = function(req, res){} ;
// this function will be exported to routes/index.js
module.exports.home = function (req , res)
{
    res.render("../views/homepage.ejs") ;
}