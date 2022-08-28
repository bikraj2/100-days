const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    taskname:{
        type:String,
        require:[true,'make sure to enter a value'],
        trim:true,
        maxlength:[20,"Name is too short"]
    },
    completed:{
        type:Boolean,
        deafult:false,
    },
})

module.exports = mongoose.model('task',TaskSchema)

