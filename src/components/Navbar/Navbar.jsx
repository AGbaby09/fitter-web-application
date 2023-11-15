import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [Open, setOpen] = useState(false);
    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);

    const navigate = useNavigate();
    const profile = () => {
        navigate("/user/profile");
        setOpen(false);
    }
    const profileUpdate = () => {
        navigate("/user/profile/update");
        setOpen(false);
    }
    const location = () => {
        navigate("/user/location");
        setOpen(false);
    }

    return ( 
        <header id="navbar">
            <button id="menu" onClick={openMenu}>
                <i className='bx bx-menu'></i>
            </button>
            <div id="links" className={Open ? "link-open" : "link-close"}>
                <div id="links-nav">
                    <button id="close" onClick={closeMenu}>
                        <i className='bx bx-x' ></i>
                    </button>
                </div>
                <div className="links">
                    <div className="link">
                        <button onClick={profile}><i className='bx bxs-user' ></i>Profile</button>
                    </div>
                    <div className="link">
                        <button onClick={profileUpdate}><i className='bx bxs-car-mechanic'></i>Request Assistance</button>
                    </div>
                    <div className="link">
                        <button onClick={location}><i className='large material-icons' >location_on</i>Find Nearby Shop</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;