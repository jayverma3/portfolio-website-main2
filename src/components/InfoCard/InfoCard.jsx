import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./InfoCard.css";
import P from "../PinkIcon/PinkIcon";

const InfoCard = ({
  image,
  title,
  intro,
  sections,
  meteorImages,
  concludingText,
}) => {
  const containerRef = useRef();
  const [startAnimation, setStartAnimation] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setRotate({ x: -y * 10, y: x * 10 }); // Reduced rotation for subtlety

    const mouseX = clientX - left;
    const mouseY = clientY - top;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setMousePosition({ x: -100, y: -100 }); // Move spotlight off-card
  };

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (!startAnimation || !containerRef.current) return;

    const container = containerRef.current;

    const createMeteor = () => {
      if (!container) return;
      const meteor = document.createElement("img");
      meteor.src =
        meteorImages[Math.floor(Math.random() * meteorImages.length)];
      meteor.className = "meteor";
      const size = Math.random() * 40 + 50;
      meteor.style.width = `${size}px`;
      meteor.style.left = `${Math.random() * 100}%`;
      meteor.style.setProperty("--drift", `${Math.random() * 40 - 20}px`);
      meteor.style.animationDuration = `${Math.random() * 4 + 4}s`;
      container.appendChild(meteor);
      setTimeout(() => meteor.remove(), 8000);
    };

    const interval = setInterval(createMeteor, 500);
    return () => clearInterval(interval);
  }, [startAnimation, meteorImages]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="ic-meteor-container" ref={containerRef}>
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        className="ic-floating-div"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
          transform: `perspective(1500px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <motion.img
          src={image}
          alt="Profile"
          className="ic-image"
          variants={itemVariants}
        />
        {title && (
          <motion.h1 className="ic-h1" variants={itemVariants}>
            {title}
          </motion.h1>
        )}
        <motion.div className="ic-divider" variants={itemVariants}></motion.div>
        {intro && (
          <motion.p className="ic-p" variants={itemVariants}>
            {intro}
          </motion.p>
        )}

        {sections.map((section, index) => (
          <motion.div key={index} variants={itemVariants} className="ic-section">
            <div className="ic-divider"></div>
            <p className="ic-p">
              <strong>{section.title}</strong>
            </p>
            <motion.ul className="ic-ul">
              {section.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="ic-li"
                  variants={itemVariants}
                >
                  <P /> {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}

        <motion.div className="ic-divider" variants={itemVariants}></motion.div>
        <motion.p className="ic-p" variants={itemVariants}>
          {concludingText}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default InfoCard;
