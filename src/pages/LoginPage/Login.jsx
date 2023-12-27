import { useState } from "react";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { checkUser } from "../../services/requests/users";
import axios from "axios";

function Login() {

    const { auth, setAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });
    const inputsChangeHandler = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            if (loginData.username === "") {
                alert("please fill the username")
                return
            }
            if (loginData.password === "") {
                alert("please fill the password")
                return
            }
            const user = await checkUser(loginData)
            if (user) {
                setAuth(user)
                navigate(from, { replace: true })
            }

        } catch (error) {

        }
    }

    return (
        <div>
            <h2>Login page</h2>
            <form onSubmit={submitHandler}>
                <input placeholder="username" name="username"
                    value={loginData.username} onChange={e => inputsChangeHandler(e)} />
                <input placeholder="password" name="password"
                    value={loginData.password} onChange={e => inputsChangeHandler(e)} />
                <button type="submit">login</button>
            </form>
        </div>
    );
}

export default Login;