import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
    return ( 
        <section id="register">
            <form action="" method="post">

                <div className="form-title">
                    <h1>Registration</h1>
                </div>

                <div className="inputs">
                    <input type="text" name="username" id="username" placeholder="Username (abcdefg)" autoComplete="false"/>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="false"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>

                <button>Register</button>

                <div id="toLogin">
                    <p>Already have an account?</p>
                    <Link to="/login">Login here</Link>
                </div>

            </form>
        </section>
    );
}
 
export default Register;