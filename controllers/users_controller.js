module.exports.profile = function(req ,res)
{
    res.send(" <h1>User profile displayed from a separate router and controller</h1>") ;
} // this action will be exported to users.js router