import axios from "axios";

import {useState} from "react"

import {Link} from "react-router"

function Signup() {

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"" 
    });

    const signupUser =async () => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`,user);

    console.log(response.data);
    }
    return (
        <div>
             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto my-auto mt-[150px]">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Signup</h2>
    
     <form  className="space-y-4">
   
      <div>
       
        <input type="text"  
        placeholder="Enter your name" required
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={user.name} 
          onChange={(e)=>{
            setUser({...user,name:e.target.value})
          }}/>
      </div>

  
      <div>
      
        <input type="email" 
        placeholder="Enter your email" required
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={user.email} 
           onChange={(e)=>{
            setUser({...user,email:e.target.value})
          }}/>
      </div>

    
      <div>
      
        <input type="password" 
        placeholder="Enter your password" required
         className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" 
          value={user.password}
           onChange={(e)=>{
            setUser({...user,password:e.target.value})
          }}/>
      </div>

    
      <button type="button"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        onClick={signupUser}>
        Sign Up
      </button>
        <p>
        Already have an account?{""}
        <Link to ="/login" className="text-blue-500 underline"> Login</Link>
      </p>
    </form>

   
  </div>
        </div>
    )
}
export default Signup;