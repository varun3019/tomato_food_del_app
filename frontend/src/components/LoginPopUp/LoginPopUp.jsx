import React, { useContext, useEffect, useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import axios from "axios";

const LoginPopUp = ({setShowLogin}) => {
  const {url,setToken,token} = useContext(StoreContext); 
    const  [currentState,setCurrentState] = useState("Sign Up");
    const [data,setData] =  useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}));
    }

    const onLogin  =async  (event)=>{
      event.preventDefault();
      let newUrl = url;
      if(currentState==="Login")
      {
        newUrl += "/api/user/login";
      }
      else{
        newUrl += "/api/user/register";
      }
      const response = await axios.post(newUrl,data);
      console.log(response);
      if(response.data.success)
      {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
      }
      else{
        alert(response.data.message);
      }
      
    }
  
    // useEffect(()=>{
    //   onLogin();
    // },[])

  return (
    <div className='login-popup'>
       <form onSubmit={onLogin} action="" className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currentState==='Login'?<></>:<input name='name' onChange ={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}         
            <input name='email' onChange={onChangeHandler} value={data.email} type="text"  placeholder='Your Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit' >{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing ,i agree to the to use & privacy policy.</p>
        </div>
        {currentState==="Login"?<p>Create A new Account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>:<p>Already Have a ACCOUNT?<span onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
       </form>
    </div>
  )
}

export default LoginPopUp