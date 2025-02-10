import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [validity, setValidity] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/createCourse", { title, description, price, validity })
      .then(result => {
        console.log("Success",result)
        alert("Course Added Successfully")
        navigate("/courses")
      })
      .catch(err => console.log(err))

  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={Submit}>
          <h2 className="text-2xl font-bold mb-6 text-center">Create Course</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
            <b>Title</b>
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter Course Title"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
            <b>Description</b>
            </label>
            <input
              type="text"
              id="description"
              placeholder="Enter Course Description"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">
            <b>Price</b>
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter Course Price"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="validity" className="block text-gray-700">
              <b>Validity</b>
            </label>
            <input
              type="text"
              id="validity"
              placeholder="Enter Course Validity"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={e => setValidity(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
