import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()  
    axios.post('http://localhost:8001/register',{name,email,password})
    .then(result => {console.log(result)
      if(result.data === 'Successfully Register'){
        navigate('/login')
      }
    })
    .catch(error =>console.log(error))
  }

  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                <strong>Name:</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                <strong>Email:</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                <strong>Password:</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
            <p className="mt-4 text-center text-gray-600">
              Already Have an Account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  