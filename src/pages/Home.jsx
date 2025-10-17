import { Link } from "react-router-dom";
import { useRef } from "react";
import picRound from "../assets/picround.png";

import whiteline from "../assets/whiteblock.png";
import Threads from "../components/Backgrounds/Threads/Threads";
import CardSwap, { Card } from "../components/CardSwap/CardSwap";
import ChromaGrid from "../components/ChromaGrid/ChromaGrid";
import DomeGallery from "../components/DomeGallery/DomeGallery";
import MagicBento from "../components/MagicBento/MagicBento";
import GlassSurface from "../components/GlassSurface/GlassSurface";
import InfiniteMenu from "../components/InfiniteMenu/InfiniteMenu";
import Ballpit from "../components/Ballpit/Ballpit";
import Cubes from "../components/Cubes/Cubes";
import Masonry from "../components/Masonry/Masonry";
import logo1 from "../assets/logos/brandlogo.avif";
import StarBorder from "../components/StarBorder/StarBorder";
import logo2 from "../assets/logos/coolautomationlogo.avif";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import logo3 from "../assets/logos/elanhomesystemlogo.avif";
import TrueFocus from "../components/TrueFocus/TrueFocus";
import SplashCursor from "../components/SplashCursor/SplashCursor";
import RotatingText from "../components/RotatingText/RotatingText";
import FlowingMenu from "../components/FlowingMenu/FlowingMenu";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import CircularText from "../components/CircularText/CircularText";
import VariableProximity from "../components/VariableProximity/VariableProximity";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import ImageTrail from "../components/ImageTrail/ImageTrail";
import imgformainpage from "../assets/me_images/IMG_20250118_135530_996.jpg";

import ImageAndName from "../components/imageandname/imageandname";
import SplitText from "../components/SplitText/SplitText";
import ShapeBlur from "../components/ShapeBlur/ShapeBlur";
import "./Home.css";

import image1 from "../assets/pexels-atbo-66986-245219.jpg";
import image2 from "../assets/pexels-curtis-adams-1694007-3935350.jpg";
import image3 from "../assets/pexels-falling4utah-2724748.jpg";
import image4 from "../assets/pexels-falling4utah-2724749.jpg";
import image5 from "../assets/pexels-fotoaibe-1643384.jpg";
import image6 from "../assets/pexels-heyho-7061393.jpg";
import image7 from "../assets/pexels-heyho-8134812.jpg";
import image8 from "../assets/pexels-pixabay-271711.jpg";
import image9 from "../assets/pexels-pixabay-373541.jpg";
import image10 from "../assets/pexels-pixabay-373548.jpg";
import image11 from "../assets/pexels-saviesa-home-1098995-2089698.jpg";

import imgformainpage2 from "../assets/me_images/Snapchat-1654963961.jpg";
import imgformainpage3 from "../assets/me_images/40EC4284-EA51-48C3-8C18-DA3B04F05A24.jpg";

const Home = () => {
  const containerRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <div className="home-container">
        {/**<div className="background-threads">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>*/}
        <div className="hero-section">
          <GlassSurface
            width={1000}
            height={300}
            borderRadius={24}
            className="my-custom-class"
          >
            <img src={imgformainpage} alt="Round" className="round-image" />
            <img src={whiteline} alt="White Line" className="white-line" />
            <div style={{ paddingRight: "20px" }}></div>

            <TrueFocus
              sentence="Jay Verma"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </GlassSurface>
        </div>
        {/*<SplashCursor />*/}

        <div style={{ height: "600px", position: "relative", width: "100%" }}>
          <Cubes
            gridSize={15}
            maxAngle={180}
            radius={4}
            borderStyle="2px dashed rgb(0, 247, 255)"
            faceColor="#1a1a2e"
            rippleColor="#ff6b6b"
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
          />
          <div
            ref={containerRef}
            style={{
              position: "relative",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <VariableProximity
              label={"About me!"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
          <Cubes
            gridSize={25}
            maxAngle={180}
            radius={4}
            borderStyle="2px dashed rgb(0, 247, 255)"
            faceColor="#1a1a2e"
            rippleColor="#ff6b6b"
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
          />
        </div>
        <div className="features-section">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
        <ProfileCard
          name="Jay A. Verma"
          title="Full Stack Developer"
          handle="jayverma3"
          status="Online"
          contactText="Contact Me"
          avatarUrl={imgformainpage}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <TiltedCard
            imageSrc={imgformainpage3}
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Jay verma - 3"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Jay Verma - 3</p>
            }
          />
        </div>
        <div className="scrollrevealhome">
          {/*}
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Over the last one decade, vinshek is seriously engaged in
            distributing select international brands of great repute. Brand
            selection for vinshek is a serious business decision and the basic
            theory is to represent such brands only which offer great technology
            product lines with great potential for technological innovation
            coupled with great market acceptance and proven track record. In
            nutshell, vinshek does not believe in brand multiplication and is
            content with few select brands which offer great synergy & futher
            growth
          </ScrollReveal>
          */}
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "500px",
            maxHeight: "500px",
            width: "100%",
          }}
        >
          <Ballpit
            count={200}
            gravity={0.7}
            friction={0.8}
            wallBounce={0.95}
            followCursor={true}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
