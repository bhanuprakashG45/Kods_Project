import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from 'axios'

const UpdateCourse = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [validity,setValidity] = useState("");

  useEffect(()=>{
    axios
    .get("http://localhost:8001/getCourse/"+id)
    .then((result)=>{
      console.log(result.data);
      setTitle(result.data.title);
      setDescription(result.data.description);
      setPrice(result.data.price);
      setValidity(result.data.validity);
    })
    .catch((err)=> console.log(err));
  },[id]);

  const update = (e)=>{
    e.preventDefault();
    axios
    .put("http://localhost:8001/updateCourse/"+id,{
      title,
      description,
      price,
      validity,
    })
    .then((result)=>{
      console.log("Success :",result);
      alert("Course Updated SuccessFully!");
      navigate("/courses");
    })
    .catch((err)=>console.log(err))
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md ">
      <form onSubmit={update}>
        <h2 className="text-2xl font-bold mb-6 text-center">Update Course</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            type="text" required
            value={title}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <input
            type="text"
            required
            value={description}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <input
            type="text"
            required
            value={price}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="validity" className="block text-gray-700">
            Validity
          </label>
          <input
            type="text"
            required
            value={validity}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={e => setValidity(e.target.value)}
          />
        </div>
        <button  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Update Course
        </button>
      </form>
    </div>
  )
}

export default UpdateCourse