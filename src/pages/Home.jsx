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

const Home = () => {
  const containerRef = useRef(null);
  const demoItems = [
    {
      link: "#",
      text: "ATON AUDIO, USA",
      image: logo1,
    },
    {
      link: "#",
      text: "COOL AUTOMATION, ISRAEL",
      image: logo2,
    },
    {
      link: "#",
      text: "ELAN CONTROL SYSTEM, USA",
      image: logo3,
    },
  ];
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const items = [
    {
      image: image1,
      link: "#",
      title: "Elegant Living Room",
      description:
        "A spacious and elegant living room with modern furnishings.",
    },
    {
      image: image2,
      link: "#",
      title: "Minimalist Bedroom",
      description: "A calm and minimalist bedroom designed for relaxation.",
    },
    {
      image: image3,
      link: "#",
      title: "Modern Kitchen",
      description: "A state-of-the-art kitchen with a clean, modern aesthetic.",
    },
    {
      image: image4,
      link: "#",
      title: "Chic Dining Area",
      description: "A chic dining area that is perfect for hosting.",
    },
    {
      image: image5,
      link: "#",
      title: "Contemporary Bathroom",
      description: "A contemporary bathroom that blends style and function.",
    },
    {
      image: image6,
      link: "#",
      title: "Cozy Patio",
      description: "An inviting outdoor patio for leisure and entertainment.",
    },
    {
      image: image7,
      link: "#",
      title: "Stylish Lounge",
      description: "A stylish lounge area with a vibrant, modern design.",
    },
    {
      image: image8,
      link: "#",
      title: "Home Office",
      description: "A modern and efficient home office setup.",
    },
    {
      image: image9,
      link: "#",
      title: "Entertainment Room",
      description:
        "A home entertainment room with a large screen and comfortable seating.",
    },
    {
      image: image10,
      link: "#",
      title: "Reading Nook",
      description: "A cozy reading nook, perfect for diving into a good book.",
    },
    {
      image: image11,
      link: "#",
      title: "Luxury Spa",
      description: "A luxurious home spa for ultimate relaxation.",
    },
  ];
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
        </div>
        <ProfileCard
          name="Jay A. Verma"
          title="Full Stack Developer"
          handle="jayverma3"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/path/to/avatar.jpg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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

        <div style={{ height: "500px", position: "relative", width: "150%" }}>
          <FlowingMenu items={demoItems} />
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
