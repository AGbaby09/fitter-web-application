import "./Profile.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Profile = () => {
    const [isOn, setIsOn] = useState(false);
    const turnOn = () => {
        if(isOn === false){
            setIsOn(true);
        }else{
            setIsOn(false);
        }
    }

    return ( 
        <section id="profile">
            <h1>Profile</h1>

            <form action="" method="post">
                <label>Name<input type="text" placeholder="Full Name"/></label>
                <label>Email<input type="email" placeholder="example@exam.com"/></label>
                <label>Mobile<input type="number" placeholder="+1 (234) 456 7890"/></label>
            </form>

            <h2>Notifictaions</h2>
            <div className="notif">
                <p>Turn on/off Notification</p>
                <button onClick={turnOn}>
                    <div className={isOn ? "circle notif-open" : "circle notif-close"}></div>
                </button>
            </div>

            <Link to="/user/profile/update">Edit Profile</Link>
        </section>
    );
}
 
export default Profile;