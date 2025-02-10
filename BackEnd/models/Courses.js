const mongoose = require('mongoose')

const CoursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,                  
    },
    description :{
      type : String,
      required : true,
    },
    price:{
      type : Number,
      required : true,
    } ,
    validity:{
      type : Date,
        required : true,
    },
});

const CoursesModel = mongoose.model("courses", CoursesSchema);

module.exports = CoursesModel;