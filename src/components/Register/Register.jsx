import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const redirect = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return ( 
        <section id="register">
            <div id="back-button">
                <Link to="/"><i className='bx bx-chevron-left' ></i></Link>
            </div>
            <form action="" method="post">

                <div className="form-title">
                    <h1>Registration</h1>
                </div>

                <div className="inputs">
                    <input type="text" name="username" id="username" placeholder="Username (abcdefg)" autoComplete="false"/>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="false"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>

                <button type="submit" onClick={redirect}>Register</button> {/* change the onclick function for backend */}

                <div id="toLogin">
                    <p>Already have an account?</p>
                    <Link to="/login">Login here</Link>
                </div>

            </form>
        </section>
    );
}
 
export default Register;