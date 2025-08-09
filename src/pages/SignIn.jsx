import { Form, useNavigate } from "react-router-dom"
import { useAuth } from '../store/AuthContext.jsx'
import { useState } from "react";

export default function SignIn() {
    const [ login, setLogIn ] = useState(true)
    const { setLoggedIn } = useAuth()
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        setLoggedIn(true)
        const fd = new FormData(event.target)
        const data = Object.fromEntries(fd.entries())
        navigate('/');
        alert('Loggedin Successfully!!')
    }
    function handleAccountSubmit(event) {
        event.preventDefault();
        setLoggedIn(true)
        const fd = new FormData(event.target)
        const data = Object.fromEntries(fd.entries())
        navigate('/');
        alert('Account Created succesfully!!')
    }
    return (
        <>
            <div className="container d-flex flex-column  justify-content-center align-items-center mt-5 px-5 pb-5" style={{minHeight: '70vh', height: 'auto'}}>
                <div
                    className=" p-2 rounded shadow-sm p-3"
                    style={{backgroundColor: '#ffe5b4' }}
                >
                    <div className="btn-group my-2 ms-4" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary rounded me-4" onClick={() => setLogIn(true)}>Login</button>
                        <button type="button" className="btn rounded btn-secondary ms-3" onClick={() => setLogIn(false)}>SignUp</button>
                    </div>
                    <div className="mb-3" style={{ borderBottom: '3px solid #f7db05ff' }}></div>
                    {login ? <Form onSubmit={handleSubmit} className="ps-1 pe-5">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary">
                            Login
                        </button>
                    </Form> :
                    <Form onSubmit={handleAccountSubmit} className="ps-1 pe-5">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" name="fullName" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary">
                            Sign Up
                        </button>
                    </Form>    }
                </div>
            </div>
        </>
    )
}