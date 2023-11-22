import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import Signup from './Signup'
import axios from 'axios';

function Login() {
    const [user, setuser] = useState({ email: "", password: "" })
    const Navigate = useNavigate()

    const onFieldchange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const Login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7000/user/login", user).then(function (res) {
            Navigate("/home")
        })
        console.log("form data==,user")
    }
    return (
        <div className="container">
            <div className="Login-container">
                <div>
                    <h1>Login</h1>
                    <form onChange={(e) => Login(e)}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter Email" value={user.email} onChange={(e) => onFieldchange(e)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" value={user.password} onChange={(e) => onFieldchange(e)} />
                        </div>
                        <Link to='/'>New User Please <span>Signup</span></Link>
                        <br />
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login