import "./LoggedIn.css";
import Navbar from '../Navbar/Navbar';
import Options from '../Options/Options';
import Profile from '../Profile/Profile';
import Request from "../Request/Request";
import { Routes, Route } from 'react-router-dom';
import Shops from "../Shops/Shops";

const LoggedIn = () => {
    return ( 
        <section id="loggedIn">
            <Navbar />
            <Routes>
                <Route path="/" element={<Options />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/request" element={<Request />}/>
                <Route path="/location" element={<Shops />}/>
            </Routes>
        </section>
    );
}
export default LoggedIn;