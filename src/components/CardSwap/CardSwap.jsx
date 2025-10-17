import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

// The Card component remains a simple, forward-ref-enabled div.
export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

// Function to calculate the 3D position of each card in the stack.
const getCardPosition = (i, distance, total) => ({
  x: i * distance.x,
  y: -i * distance.y,
  z: -i * distance.z,
  rotationX: -10,
  rotationY: -15,
  zIndex: total - i,
});

// GSAP utility to instantly set a card's position.
const setCardPosition = (el, pos) => {
  gsap.set(el, {
    ...pos,
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "center center",
    force3D: true,
  });
};

const CardSwap = ({
  width = 450,
  height = 350,
  cardDistance = { x: 40, y: 40, z: 50 },
  animationConfig = { duration: 1.2, ease: "expo.inOut" },
  delay = 3500,
  pauseOnHover = true,
  onCardClick,
  children,
}) => {
  const childArray = useMemo(() => Children.toArray(children), [children]);
  const cardRefs = useMemo(
    () => childArray.map(() => React.createRef()),
    [childArray]
  );
  const order = useRef(Array.from({ length: childArray.length }, (_, i) => i));
  const timeline = useRef(null);
  const intervalId = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set initial positions of all cards.
    cardRefs.forEach((ref, i) => {
      const pos = getCardPosition(i, cardDistance, cardRefs.length);
      setCardPosition(ref.current, pos);
    });

    const cycleCards = () => {
      if (timeline.current && timeline.current.isActive()) return;
      if (order.current.length < 2) return;

      const [frontCardIndex, ...restIndices] = order.current;
      const frontCardEl = cardRefs[frontCardIndex].current;

      timeline.current = gsap.timeline({
        onComplete: () => {
          order.current = [...restIndices, frontCardIndex];
        },
      });

      // Animate the remaining cards moving forward.
      restIndices.forEach((cardIndex, i) => {
        const el = cardRefs[cardIndex].current;
        const pos = getCardPosition(i, cardDistance, cardRefs.length);
        timeline.current.to(
          el,
          { ...pos, duration: animationConfig.duration, ease: animationConfig.ease },
          0
        );
      });

      // Animate the front card moving to the back.
      const backPosition = getCardPosition(
        cardRefs.length - 1,
        cardDistance,
        cardRefs.length
      );
      timeline.current
        .to(
          frontCardEl,
          {
            y: `+=${cardDistance.y * 2}`,
            opacity: 0.5,
            scale: 0.95,
            duration: animationConfig.duration / 2,
            ease: "power2.in",
          },
          0
        )
        .set(frontCardEl, {
          ...backPosition,
          opacity: 0,
        })
        .to(
          frontCardEl,
          {
            opacity: 1,
            scale: 1,
            duration: animationConfig.duration / 2,
            ease: "power2.out",
          },
          `>${animationConfig.duration / 4}`
        );
    };

    intervalId.current = setInterval(cycleCards, delay);

    if (pauseOnHover) {
      const container = containerRef.current;
      const pause = () => clearInterval(intervalId.current);
      const resume = () => {
        cycleCards();
        intervalId.current = setInterval(cycleCards, delay);
      };
      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", resume);
      return () => {
        container.removeEventListener("mouseenter", pause);
        container.removeEventListener("mouseleave", resume);
        clearInterval(intervalId.current);
      };
    }

    return () => clearInterval(intervalId.current);
  }, [cardDistance, animationConfig, delay, pauseOnHover, cardRefs, childArray.length]);

  const renderedChildren = childArray.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: cardRefs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          },
        })
      : child
  );

  return (
    <div
      ref={containerRef}
      className="card-swap-container"
      style={{ width, height, perspective: "2000px" }}
    >
      {renderedChildren}
    </div>
  );
};

export default CardSwap;