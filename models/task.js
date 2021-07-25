const mongoose = require ("mongoose") ;
const taskSchema = new mongoose.Schema(
    {
        task:{
                type :String ,
                required :true,
        } ,
        description:{
            type :String ,
            required :true,
        },
        dueDate :{
            type:Date,
            default:Date.now,
        },
        priority:{
            type :String ,
            required :true,
    } ,
    status:{
        type :String ,
        required :true,
} ,
    }
);

//collection using taskSchema
const Tasks = mongoose.model ("Tasks",taskSchema) ;

module.exports = Tasks ;