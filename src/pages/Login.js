import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import LeftSide from '../components/login/LeftSide';

import { login } from '../actions/auth';

const Login = (props) => {

    const form = useRef();
    const checkBtn = useRef();

    const [teacherCode, setTeacherCode] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = 'login';
        return () => { document.body.className = ''; }
    });

    const required = value => {
        if (!value) {
            return (
                <div className="login__input-error w-5/6 text-theme-6 mt-2">
                    Талбар хоосон байж болохгүй!.
                </div>
            );
        }
    };
    
 
    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
        
            dispatch(login(teacherCode, password))
            .then(() => {
                props.history.push("/dashboard");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }

    }
    
    if (isLoggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <>
            <div className="container sm:px-10">
                <Form onSubmit={handleSubmit} ref={form}>
                    <div className="block xl:grid grid-cols-2 gap-4">
                        <LeftSide />
                        
                        <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                                    Нэвтрэх
                                </h2>
                                <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">Bla bla bla...bla bla bla... Bla bla blaa...</div>
                                <div className="intro-x mt-8">
                                    <Input
                                        type="text"
                                        className="intro-x login__input input input--lg border border-gray-300 block"
                                        placeholder="Багшийн код"
                                        onChange={e => setTeacherCode(e.target.value)}
                                        validations={[required]}
                                    />
                                    <Input
                                        type="password"
                                        className={`intro-x login__input input input--lg border border-gray-300 block mt-4`}
                                        placeholder="Password"
                                        onChange={e => setPassword(e.target.value)}
                                        validations={[required]}
                                    />
                                </div>
                                {message && (
                                    <div id="error-password" className="login__input-error w-5/6 text-theme-6 mt-2">{message}</div>
                                )} 
                                <div className="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
                                    <div className="flex items-center mr-auto">
                                        <Input
                                            type="checkbox"
                                            className="input border mr-2"
                                            id="remember-me"
                                        />
                                        <label className="cursor-pointer select-none" htmlFor="remember-me">Нэвтрэх код сана</label>
                                    </div>
                                    <Link to="#">Нууц үгээ мартсан уу?</Link> 
                                </div>
                                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                    <button disabled={loading} className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top">
                                    {/* {loading && (
                                        ...
                                    )} */}
                                        <span>Нэвтрэх</span>
                                    </button>
                                </div>
                                
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                            </div>
                        </div>

                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login;