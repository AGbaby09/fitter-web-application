import "./LoggedIn.css";
import Navbar from '../Navbar/Navbar';
import Options from '../Options/Options';
import Profile from '../Profile/Profile';
import UpProfile from '../UpdatedProfile/UpProfile';
import UserLoc from '../UserLocation/UserLoc';
import { Routes, Route } from 'react-router-dom';

const LoggedIn = () => {
    return ( 
        <section id="loggedIn">
            <Navbar />
            <Routes>
                <Route path="/" element={<Options />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/profile/update" element={<UpProfile />}/>
                <Route path="/location" element={<UserLoc />}/>
            </Routes>
        </section>
    );
}
export default LoggedIn;