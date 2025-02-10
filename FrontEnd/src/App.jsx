import { Routes, Route } from "react-router-dom";
import LogIn from "./login-register/LogIn";
import Register from "./login-register/Register";
import CreateCourse from "./components/admins/CreateCourse";
import Courses from "./components/admins/Courses";
import UpdateCourse from "./components/admins/UpdateCourse";
import ManageEnrollments from "./components/admins/ManageEnrollments";
import AdminHome from "./components/admins/AdminHome";
import StudentHome from "./components/students/StudentHome";
import EnrolledCourses from "./components/students/EnrolledCourses";
import Cards from "./components/students/ContextOfCourses";


const App = () => { 

  return (
    <Routes>
      {/* Routes For Login And Register.. */}
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />

      {/* Routes For Admin Pages */}
      <Route path="/createCourse" element={<CreateCourse />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/updateCourse/:id" element={<UpdateCourse />} />
      <Route path="/manage" element={<ManageEnrollments />} />
      <Route path="/admin-home" element={<AdminHome />} />
 
      {/* Routes For Student Pages */}
      <Route path="/student-home" element={<StudentHome />} />
      <Route path="/enrolled-courses" element={<EnrolledCourses />} />
      <Route path="/context" element={<Cards />} />
    </Routes>
  );
};

export default App;
