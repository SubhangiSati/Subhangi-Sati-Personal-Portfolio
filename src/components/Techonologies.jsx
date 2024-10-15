import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs} from "react-icons/fa"
import { SiMongodb} from "react-icons/si"
import { FaPython, FaDatabase } from "react-icons/fa";        // For Python (SciPy, NLTK) and Databases (MySQL)
import { SiPytorch, SiKeras, SiTableau } from "react-icons/si"; // For PyTorch, Keras, Tableau
import { SiScikitlearn, SiMysql, SiNumpy } from "react-icons/si"; // For Scikit-learn, MySQL, Numpy
import { motion } from "framer-motion"

const iconVariants =(duration) =>({
    initial: { y: -10},
    animate:{ 
        y: [10, -10],
        transition: { 
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse", 
        },
    },
})

const Techonologies = () => {
  return(
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial= {{opacity:0, y:-100}}
        transition= {{duration: 1.5}} 
        className="my-20 text-center text-4xl font-thin">Techonologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial= {{opacity:0, x:-100}}
        transition= {{duration: 1.5}}
        className="flex flex-wrap item-center justify-center gap-4">
            <motion.div 
                variants= {iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(3)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(3.5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(4)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDatabase className="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div 
                variants= {iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPytorch className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKeras className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(5.5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiScikitlearn className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(6)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNumpy className="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(6.5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(7)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                 variants= {iconVariants(7.5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTableau className="text-7xl text-orange-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
  
}

export default Techonologies
