const mongoose = require("mongoose")

const TaskSchema1 = new mongoose.Schema({
    taskname:{
        type:String,
        required:[true,'make sure to enter a value'],
        trim:true,
        maxlength:[20,"Name is too short"]
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('task',TaskSchema1)

