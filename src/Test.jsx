import {motion} from "framer-motion"

export const Test = () => {
  return (
    <div className="course">
      <motion.div className="box" animate={{opacity:0}}></motion.div>
    </div>
  )
}

export default Test