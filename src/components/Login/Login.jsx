import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const redirect = (e) => {
        e.preventDefault();
        navigate("/user");
    }

    return ( 
        <section id="login">
            <div id="back-button">
                <Link to="/"><i className='bx bx-chevron-left' ></i></Link>
            </div>
            <form action="" method="post">

                <div className="form-title">
                    <h1>Log In</h1>
                </div>

                <div className="radios">
                    <label>
                        <input type="radio" name="user" id="user" value="user"/>
                        User
                    </label>
                    <label>
                        <input type="radio" name="mechanic" id="mechanic" value="mechanic"/>
                        Mechanic
                    </label>
                </div>

                <div className="inputs">
                    <input type="text" name="username" id="username" placeholder="Username (abcdefg)" autoComplete="false"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>

                <div className="forgot">
                    <Link to="/forgot">Forgot Password?</Link>
                </div>
                
                <button type="submit" onClick={redirect}>LOG IN</button> {/* change the onclick function for backend */}

                <div id="toRegister">
                    <p>Don't have an account?</p>
                    <Link to="/register">Register</Link>
                </div>

            </form>
        </section>
    );
}
 
export default Login;