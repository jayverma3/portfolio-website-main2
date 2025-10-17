import React, { useEffect, useState } from "react";
import "./imageandname.css";
import picRound from "../../assets/picround.png";
import whiteline from "../../assets/whiteblock.png";
import rocket from "../../assets/logos_pngs/rocket_pngs.png";
import TrueFocus from "../TrueFocus/TrueFocus";
import GlassSurface from "../GlassSurface/GlassSurface";

const ImageAndName = ({ startAnimation }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 2500); // Wait for rocket to finish
      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  return (
    <div className="image-and-name-container">
      {startAnimation && !showContent && (
        <img src={rocket} alt="Rocket" className="rocket-image" />
      )}

      {startAnimation && showContent && (
        <>
          <GlassSurface
            width={900}
            height={300}
            borderRadius={24}
            className="my-custom-class"
          >
            <img src={picRound} alt="Round" className="round-image" />
            <img src={whiteline} alt="White Line" className="white-line" />
            <TrueFocus
              sentence="Jay Verma"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </GlassSurface>
        </>
      )}
    </div>
  );
};

export default ImageAndName;
