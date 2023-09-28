import { useEffect } from "react";
import { motion } from "framer-motion";

const Loader=({setShowLoader})=>{
    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false)
        },2800)
    }, [setShowLoader]);

    const iconVariant = {
        hidden: {
          pathLength: 0,
          fill: "rgba(0, 99, 109, 0.8)"
        },
        visible: {
          pathLength: 5,
          fill: "rgba(176, 229, 235, 0.8)",
          stroke: "rgba(224, 212, 0, 0.8)",
          scale: 0,
          strokeWidth: 3,
          transition: {
            default: { duration: 3, ease: "easeIn" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
            stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
            scale: { duration: 3, ease: [1, 1, 0.5, 0] },
          },
        },
      };

      const iconVariant2 = {
        hidden: {
            pathLength: 0,
            fill: "rgba(139, 14, 174, 0.8)"
          },
          visible: {
            pathLength: 5,
            fill: "rgba(163, 99, 181, 0.8)",
            stroke: "rgba(224, 212, 0, 0.8)",
            scale: 0,
            strokeWidth: 3,
            transition: {
              default: { duration: 3, ease: "easeIn" },
              fill: { duration: 3, ease: [1, 0, 0.8, 1] },
              stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
              scale: { duration: 3, ease: [1, 1, 0.5, 0] },
            },
          },
        };

    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 299"
          style={{width: "20vw", height: "20vw" }}
        > 
  
          <motion.path 
              d="M47.1 93.3c4.6 3.1 7.6 7.8 8.9 14.2.8 3.7 1 23.2.7 63.7-.4 63.2-.2 61.6-6.2 76.3-7.6 18.9-21.3 34.1-39 43.4l-6 3.2 12.5-.5c23.2-.8 43.4-9.6 61.6-26.9 10.6-10 16.6-18.3 21.4-29.5 7-16.3 7.1-17.6 7.1-74-.1-50.5.4-61.3 3.5-66 .8-1.2 1.1-2.2.7-2.2-.5 0 .6-.9 2.2-2l3-2H43.7l3.4 2.3z"
              variants={iconVariant2}
              initial="hidden"
              animate="visible"
          />
  
          <motion.path 
              d="M110.3 3.5c-30 5.4-55.8 24.3-68.3 50-4.5 9.4-6.9 17.1-8.5 27.5l-.7 4.5 5.3-8C45 67 53.7 58.7 61.5 55c11.1-5.3 16.1-5.9 48.5-6l29.5-.2.3 19.4c.2 12.1-.1 21.4-.8 24.8-2 9.3-6.4 17.1-14 24.9l-7 7.2v20.5c0 11.2.1 20.4.3 20.4 1.1 0 13.6-5.3 17-7.3 19.2-10.7 37.3-32.2 45.8-54.1 5.9-15.3 7-21.5 7.9-44.1 1-24.2 2.7-34.4 7.2-43.4 3.5-7 9.1-11.5 15.5-12.7 10-1.9.2-2.4-44.9-2.3-35.8.1-51.3.4-56.5 1.4z"
              variants={iconVariant}
              initial="hidden"
              animate="visible"
          />
  
  
        </motion.svg>
      </div>
    )
};

export default Loader;