import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Logo from "../../assets/logo.svg";
const Navbar=()=>{
    return (
        <div > 
            <motion.div 
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
            </motion.div>
        </div>
    )
}

export default Navbar;