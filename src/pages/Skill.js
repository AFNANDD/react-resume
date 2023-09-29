import Card from "../components/Skill-Card/Card";
import { motion } from "framer-motion";

const Skill=()=>{

    const img = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    ]

    return(
        <div className="SkillPage">
            <motion.div 
                className="Skill-Container"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{duration:0.5, type:"spring"}}
                >
                    <Card name="HTML" level="Intermediate" src={img[0]} />
                    <Card name="HTML" level="Intermediate" src={img[0]} />
                    <Card name="HTML" level="Intermediate" src={img[0]} />
                    <Card name="HTML" level="Intermediate" src={img[0]} />
                    <Card name="HTML" level="Intermediate" src={img[0]} />
                    <Card name="HTML" level="Intermediate" src={img[0]} />
                    <Card name="HTML" level="Intermediate" src={img[0]} />
                    <Card name="HTML" level="Intermediate" src={img[0]} />
                    <Card name="HTML" level="Intermediate" src={img[0]} />
            </motion.div>
        </div>
    )
}

export default Skill;