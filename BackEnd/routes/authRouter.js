const express=require('express')
const router=express.Router();
const authController=require('../controllers/authController');
const UserModel = require('../models/Users');
const CoursesModel = require('../models/Courses');
const EnrollmentsModel = require('../models/Enrollments');

//API For Login and Register
router.route('/login').post(authController.login)
router.route('/register').post(authController.register)

//API for All Courses
router.route('/').get(async (req, res) => {
    try {
        const courses = await CoursesModel.find({});
        console.log("Fetched Courses from DB:", courses); // Debugging
        res.status(200).json(courses);
    } catch (err) {
        console.error("Error fetching Courses:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API For Create Course
router.route('/createCourse').post((req,res)=>{
    CoursesModel.create(req.body)
    .then(course=>res.json(course))
    .catch(err=>res.json(err))
})

//to get data by id to update data
router.route('/getCourse/:id').get((req,res)=>{
    const id=req.params.id;
   CoursesModel.findById({_id:id})
    .then(courses=>res.json(courses))
    .catch(err=>console.log(err)
    )
})

//to update data
router.route('/updateCourse/:id').put((req,res)=>{
    const id=req.params.id;
    CoursesModel.findByIdAndUpdate({_id:id},{title:req.body.title,description: req.body.description,
        price: req.body.price,validity: req.body.validity})
    .then(result =>res.json({msg:"Success",result})).
    catch(err=>res.json(err))
})

//to delete
router.route('/deleteCourse/:id').delete((req,res)=>{
    const id=req.params.id;
    CoursesModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})


//API to Enroll Course
// router.route('/enrollCourse/:')

  
module.exports=router;