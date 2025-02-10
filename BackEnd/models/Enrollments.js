const mongoose = require('mongoose')

const EnrollmentsSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    required: true
    },
    courseId :{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'courses',
      required: true
    },
    progress :{
       type: String, enum: ["pending", "success"], default: "pending" ,
    } ,
})

const EnrollmentsModel = mongoose.model("enrollments",EnrollmentsSchema);

module.exports = EnrollmentsModel;