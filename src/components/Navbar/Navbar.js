import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
//import NavLinks from "./NavLinks";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import openMenu from "../../images/open.svg";
import closeMenu from "../../images/close.svg";

import  "./Navbar.css"

const Navbar=()=>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav >
            <motion.div 
            className="Navbar-Container"
            initial={{scale:0.5, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{delay:0, duration:0.5, type:"spring"}} 
            >
                <div className="Navbar-Item"  >
                    <div className="Navbar-button">
                        <NavLink to="/">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 2, duration: 0.5, type: "spring" }}
                            >
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{scale: 0.9}}
                                    src={Logo}
                                    alt="Michael Yeates' Logo"
                                    style={{ height: "40px" , marginLeft: "10px"}}
                                />
                            </motion.div>
                        </NavLink>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
                            >
                                <button className="dropdown-toggle" onClick={()=>setIsMenuOpen(!isMenuOpen)} >
                                    {isMenuOpen ? (
                                        <img className="closeMenu" src={closeMenu} alt="Close" />
                                    ) : (
                                        <img className="openMenu" src={openMenu} alt="Open" />
                                    )}
                                </button>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
                            >
                            <ul className={`links ${isMenuOpen ? "open" : "closed"}`}>
                                    <li>
                                        <NavLink to="/" onClick={()=>setIsMenuOpen(false)} >Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" onClick={()=>setIsMenuOpen(false)} >About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/skill" onClick={()=>setIsMenuOpen(false)} >Skills</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/project" onClick={()=>setIsMenuOpen(false)} >Project</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/experience" onClick={()=>setIsMenuOpen(false)} >Experience</NavLink>
                                    </li>
                                </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            {/* <div className="menu" onClick={()=>setIsMenuOpen(!isMenuOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={isMenuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li>
                    <NavLink to="/skill" >Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/project" >Project</NavLink>
                </li>
                <li>
                    <NavLink to="/experience" >Experience</NavLink>
                </li>
            </ul> */}
            {/* <motion.div 
            className="Navbar-Container"
            initial={{scale:0.5, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{delay:0, duration:0.5, type:"spring"}} 
            >
                <div className="Navbar-Item"  >
                    <NavLink to="/">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5, type: "spring" }}
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                whileTap={{scale: 0.9}}
                                src={Logo}
                                alt="Michael Yeates' Logo"
                                style={{ height: "50px" , marginLeft: "10px"}}
                            />
                        </motion.div>
                    </NavLink>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
                        >
                            <NavLinks />
                    </motion.div>
                </div>
            </motion.div> */}
        </nav>
    )
}

export default Navbar;