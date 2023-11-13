import "./Home.css";
import Car from "../../assets/car.jpg"
const Home = () => {
    return ( 
        <main>
            <div className="texts">
                <h1>Fitter</h1>

                <h3>WELCOME</h3>
                <p>Let's Get Started</p>
            </div>
            <div className="carImage-container">
                <img src={Car} alt="vehicle" />
            </div>
            <div className="log-links">

            </div>
        </main>
    );
}
 
export default Home;