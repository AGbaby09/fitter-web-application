import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <section id="login">
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
                        <input type="radio" name="user" id="mechanic" value="user"/>
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

                <button>LOG IN</button>

                <div id="toRegister">
                    <p>Don't have an account?</p>
                    <Link to="/register">Register</Link>
                </div>

            </form>
        </section>
    );
}
 
export default Login;