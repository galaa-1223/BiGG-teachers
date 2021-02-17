import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';


import { login } from '../actions/auth';

// const required = (value) => {
//     if (!value) {
//         return (
//             <div className="alert alert-danger" role="alert">
//             This field is required! BiGG
//             </div>
//         );
//     }
// };

const Login = (props) => {

    // const form = useRef();
    // const checkBtn = useRef();

    const [teacherCode, setTeacherCode] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     document.body.className = 'login';
    //     return () => { document.body.className = ''; }
    // });
    // localStorage.removeItem("teacher");
 
    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);
        
        dispatch(login(teacherCode, password))
        .then(() => {
            props.history.push("/profile");
            window.location.reload();
        })
        .catch(() => {
            setLoading(false);
        });
    }
    
    console.log(isLoggedIn);
    if (isLoggedIn) {
        return <Redirect to="/profile" />;
    }


    return (
        <div className="login-wrapper">
            <h1>Nevtreh</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Teacher code:</p>
                    <input type="text" onChange={e => setTeacherCode(e.target.value)}/>
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>

                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )} 
            </form>
        </div>
    )
}

export default Login;