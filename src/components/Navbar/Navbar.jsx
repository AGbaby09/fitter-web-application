import "./Navbar.css";
import { useState } from "react";


const Navbar = () => {
    const [Open, setOpen] = useState(false);
    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);

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
            </div>
        </header>
    );
}
 
export default Navbar;