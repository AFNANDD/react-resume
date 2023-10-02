import { motion } from "framer-motion";
import Typewritter from "typewriter-effect";

const HomePage= (text) => {
    return (
        <div className="HomePage" >
            <motion.h1
                className="Personal-Name"
                initial={{scale: 0.5, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{delay: 0, duration: 0.5, type: "spring"}}
                >
                    {text.name}
            </motion.h1>
            <motion.div
                initial={{ y: -100, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ duration: 0.4, type: "spring" }} 
                >
                <Typewritter
                    options={{
                        strings: [
                            "Software Engineer",
                            "Website Developer"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 30,
                    }}
                    />
                {/* <Typewritter
                    options={{cursor: ""}}
                    onInit={ (typewriter) => 
                        {
                            typewriter.changeDelay(50).typeString("Software Engineer").start();
                        }
                    }    /> */}
            </motion.div>
        </div>
    )
}

export default HomePage;