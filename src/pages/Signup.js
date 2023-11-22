import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Login from "./Login"
function Signup() {
    const[user,setuser] = useState({name:"",email:"",password:"",confirmpassword:""})

    const onFieldchange =(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    const signup =(e)=>{
        e.preventDefault();
        console.log("form data==,user")
        axios.post("http://localhost:7000/user/signup",user).then(function(res){
            alert("succesfully registered")
        }).catch(function(err){
            console.log("err")
        })
    }
    return (
        <div className="container">
            <div className="signup-container">
                <div>
                    <h1>Signup</h1>
                    <form onSubmit={(e)=>Signup(e)}>
                    <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" name='name'placeholder="Enter Name"value={user.name} onChange={(e)=>onFieldchange(e)}/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control"name='email'placeholder="Enter Email"value={user.email}onChange={(e)=>onFieldchange(e)}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control"name='password'placeholder="Password"value={user.password}onChange={(e)=>onFieldchange(e)}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"> Confirm Password</label>
                            <input type="password" className="form-control"name='confirmpassword'placeholder="confirm password"value={user.confirmpassword}onChange={(e)=>onFieldchange(e)}/>
                        </div>
                        <Link to='Login'>Already Signup Please <span>Login</span></Link>
                        <br/>
                        <button type="submit" class="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup