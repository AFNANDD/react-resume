import { motion } from "framer-motion";
import "./About.css"

const About= () => {
    return (
        <div className="AboutPage">
            <motion.div 
                className="About-Container"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{duration:0.5, type:"spring"}}
                >
                    <h1>About Me</h1>
                    <label>
                        I am eager to seize opportunities for
                        hands-on experience in software
                        development, testing, and program
                        maintenance. My goal is to actively
                        contribute to the organization's growth
                        and be a vital force in creating tangible
                        value. Through these endeavors, I will
                        sharpen my coding, testing, and
                        maintenance skills, while leaving a
                        lasting and meaningful impact on the
                        company's success.
                    </label>
                    <h1>Education</h1>
                    <p>computer science     2018 - 2021</p>
                    <p>Prince of Songkla University hatyai campus</p>
            </motion.div>
        </div>
    )
};

export default About;