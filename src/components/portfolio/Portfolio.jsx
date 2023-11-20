import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "School Website",
    img: "school.png",
    description:
      "School website with management system. This project was prepared for my home village school.",
  },
  {
    id: 2,
    title: "Shoes website",
    img: "incaltaminte.png",
    description:
      "Looking for new Footwear, Clothing & Equipment for your next Run, Hike or Gym session? Discover our large range from adidas, Asics, Saucony & more now!",
  },
  {
    id: 3,
    title: "Images Gallery",
    img: "gallery.png",
    description:
      "Find Gallery stock images in HD and millions of other royalty-free stock photos, 3D objects, illustrations and vectors in the Shutterstock collection.",
  },
  {
    id: 4,
    title: "School Website",
    img: "school.png",
    description: "School website with management system",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>{item.link}See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
