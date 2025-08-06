import { Form, useNavigate } from "react-router-dom"

export default function SignIn() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target)
        const data = Object.fromEntries(fd.entries())
        navigate('/');
    }
    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Login</h2>
                <Form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </Form>
            </div>
        </>
    )
}