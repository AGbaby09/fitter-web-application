import "./About.css";
import AboutIMG from "../../assets/about.jpg"
import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <section>
            <div id="nav-button">
                <Link to="/"><i className='bx bx-home-alt'></i></Link>
            </div>

            <header>
                <h1>About Us</h1>
                <img src={AboutIMG} alt="about" loading="eager"/>
            </header>

            <article>
                <h1>Elevate Your Mechanical Experience With FITTER</h1>
                <p>This revolutionary application is designed to redefine how you navigate mechanical challenges. At FITTER, we are dedicated to providing a seamless and efficient platform that ensures convenient access to professional assistance and simplifies the process of locating nearby mechanical shops. With a sleek design and an array of features, FITTER is here to transform your experience of dealing with unexpected car troubles.</p>
            </article>

        </section>
    );
}
 
export default About;