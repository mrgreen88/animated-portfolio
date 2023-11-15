import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          IT portfolio
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/public/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/public/in.svg" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/public/instagram.svg" alt="instagram" />
          </a>
          <a href="#">
            <img src="/public/twitterX.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
