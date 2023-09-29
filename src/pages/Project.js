import Card from "../components/Project-Card/Card";
import { motion } from "framer-motion";
// import { ProjectList } from "../list/ProjectList";
// import { ProjectData } from "../list/ProjectData";

//Image
import i11 from "../assets/11.jpg";


const Project= () => {

    return (
        <div className="ProjectPage">
            <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{duration:0.5, type:"spring"}}
                className="Project-Container" 
                >
                    <Card name="HTML" label="Intermediate" img={i11} />
                    <Card name="HTML" label="Intermediate" img={i11} />
                    <Card name="HTML" label="Intermediate" img={i11} />
                    <Card name="HTML" label="Intermediate" img={i11} />
                    <Card name="HTML" label="Intermediate" img={i11} />
                    <Card name="HTML" label="Intermediate" img={i11} />
                    {/* {ProjectData.map((project) => (
                       <Card name="HTML" label="Intermediate" img={ProjectList(project)} /> 
                    ))} */}
            </motion.div>
        </div>
    )
}

export default Project;