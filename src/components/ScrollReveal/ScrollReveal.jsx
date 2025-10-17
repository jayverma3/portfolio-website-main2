import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 0,
  blurStrength = 12,
  containerClassName = "",
  textClassName = "",
  skew = 0,
  parallax = 80,
  fromColor = "#6366F1",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word-wrapper" key={index}>
          <span className="word">{word}</span>
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const wordElements = el.querySelectorAll(".word");

    const animation = gsap.fromTo(
      wordElements,
      {
        opacity: baseOpacity,
        y: `${parallax}px`,
        skewX: skew,
        color: fromColor,
        rotationX: -90,
        transformOrigin: "top center",
        willChange: "opacity, transform, color, filter",
      },
      {
        ease: "expo.out",
        opacity: 1,
        y: "0px",
        skewX: 0,
        rotationX: 0,
        color: "inherit",
        stagger: 0.06,
        duration: 1.5,
        paused: true,
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "expo.out",
          filter: "blur(0px)",
          stagger: 0.06,
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    ScrollTrigger.create({
      trigger: el,
      scroller,
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      animation: animation,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    blurStrength,
    skew,
    parallax,
    fromColor,
    children,
  ]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </div>
  );
};

export default ScrollReveal;
