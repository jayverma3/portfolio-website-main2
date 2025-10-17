import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cubes.css";

const Cubes = ({
  numCubes = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = "power3.out",
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = "1px solid #fff",
  faceColor = "#060010",
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = "#fff",
  rippleSpeed = 2,
}) => {
  const sceneRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimerRef = useRef(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0 });
  const simTargetRef = useRef({ x: 0 });
  const simRAFRef = useRef(null);

  const colGap =
    typeof cellGap === "number"
      ? `${cellGap}px`
      : cellGap?.col !== undefined
      ? `${cellGap.col}px`
      : "5%";

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (colCenter) => {
      if (!sceneRef.current) return;
      sceneRef.current.querySelectorAll(".cube").forEach((cube) => {
        const c = +cube.dataset.col;
        const dist = Math.abs(c - colCenter);
        if (dist <= radius) {
          const pct = 1 - dist / radius;
          const angle = pct * maxAngle;
          gsap.to(cube, {
            duration: enterDur,
            ease: easing,
            overwrite: true,
            rotateX: -angle,
            rotateY: angle,
          });
        } else {
          gsap.to(cube, {
            duration: leaveDur,
            ease: "power3.out",
            overwrite: true,
            rotateX: 0,
            rotateY: 0,
          });
        }
      });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    (e) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / numCubes;
      const colCenter = (e.clientX - rect.left) / cellW;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [numCubes, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll(".cube").forEach((cube, i) =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        delay: i * 0.02, // Staggered reset
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / numCubes;

      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [numCubes, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    (e) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / numCubes;

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);

      const colHit = Math.floor((clientX - rect.left) / cellW);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings = {};
      sceneRef.current.querySelectorAll(".cube").forEach((cube) => {
        const c = +cube.dataset.col;
        const dist = Math.abs(c - colHit);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach((ring) => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube) =>
            Array.from(cube.querySelectorAll(".cube-face"))
          );

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: "power3.out",
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: "power3.out",
          });
        });
    },
    [rippleOnClick, numCubes, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * numCubes,
    };
    simTargetRef.current = {
      x: Math.random() * numCubes,
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        tiltAt(pos.x);
        if (Math.abs(pos.x - tgt.x) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * numCubes,
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) {
        cancelAnimationFrame(simRAFRef.current);
      }
    };
  }, [autoAnimate, numCubes, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", resetAll);
    el.addEventListener("click", onClick);

    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", resetAll);
      el.removeEventListener("click", onClick);

      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);

      rafRef.current != null && cancelAnimationFrame(rafRef.current);
      idleTimerRef.current && clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: numCubes });
  const sceneStyle = {
    gridTemplateColumns: cubeSize
      ? `repeat(${numCubes}, ${cubeSize}px)`
      : `repeat(${numCubes}, 1fr)`,
    columnGap: colGap,
  };
  const wrapperStyle = {
    "--cube-face-border": borderStyle,
    "--cube-face-bg": faceColor,
    "--cube-face-shadow":
      shadow === true ? "0 0 6px rgba(0,0,0,.5)" : shadow || "none",
    ...(cubeSize
      ? {
          width: `${numCubes * cubeSize}px`,
          height: `${cubeSize}px`,
        }
      : {}),
  };

  return (
    <div className="default-animation" style={wrapperStyle}>
      <div
        ref={sceneRef}
        className="default-animation--scene"
        style={sceneStyle}
      >
        {cells.map((_, c) => (
          <div key={c} className="cube" data-col={c}>
            <div className="cube-face cube-face--top" />
            <div className="cube-face cube-face--bottom" />
            <div className="cube-face cube-face--left" />
            <div className="cube-face cube-face--right" />
            <div className="cube-face cube-face--front" />
            <div className="cube-face cube-face--back" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cubes;