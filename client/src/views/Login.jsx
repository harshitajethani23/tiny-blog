import axios from "axios";
import {useState} from "react";
import {Link} from "react-router"

function Login() {

    const [user,setUser] = useState({
        email:"",
        password:""
    });

    const loginUser =async () => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`,user);
        if(response?.data?.success) {
          localStorage.setItem("loggedInUser",JSON.stringify(response.data.user));
          
          window.location.href = "/"
        }
    };

    return (
           <div>
             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto my-auto mt-[150px]">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
    
     <form  className="space-y-4">
   
   

  
      <div>
      
        <input type="email"  required
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" 
          placeholder="Enter your email"
          value={user.email}
             onChange={(e)=>{
            setUser({...user,email:e.target.value})
          }}/>
      </div>

    
      <div>
      
        <input type="password" required
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter your password" 
          value={user.password}
             onChange={(e)=>{
            setUser({...user,password:e.target.value})
          }}/>
      </div>

    
      <button type="button"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        onClick={loginUser}>
        Login
      </button>

      <p>
        Don't have an account?{""}
        <Link to ="/signup" className="text-blue-500 underline"> Signup</Link>
      </p>
    </form>

   
  </div>
        </div>
    )
}
    

export default Login;