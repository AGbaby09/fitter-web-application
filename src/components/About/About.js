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
                <h1>Elevate Your Mechanical Experience with FITTER</h1>
            </article>

        </section>
    );
}
 
export default About;