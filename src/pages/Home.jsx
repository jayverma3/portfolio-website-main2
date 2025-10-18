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
import InfiniteScroll from "../components/InfiniteScroll/InfiniteScroll";
import ImageAndName from "../components/imageandname/imageandname";
import SplitText from "../components/SplitText/SplitText";
import ShapeBlur from "../components/ShapeBlur/ShapeBlur";
import InfoCard from "../components/InfoCard/InfoCard";

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

import imgformainpage from "../assets/me_images/IMG_20250118_135530_996.jpg";
import imgformainpage2 from "../assets/me_images/Snapchat-1654963961.jpg";
import imgformainpage3 from "../assets/me_images/40EC4284-EA51-48C3-8C18-DA3B04F05A24.jpg";
import imgformainpage4 from "../assets/me_images/photo_15_2023-02-14_12-41-15.jpg";
// Full Stack Meteor Images
import css3 from "../assets/logos_pngs/css3.png";
import html5 from "../assets/logos_pngs/html.png";
import reactlogo from "../assets/logos_pngs/react.png";
import mongodblogo from "../assets/logos_pngs/mongodb.png";
import vitelogo from "../assets/logos_pngs/Vite.js.png";
import expresslogo from "../assets/logos_pngs/Express.png";
import nextjslogo from "../assets/logos_pngs/Next.js.png";
import PHP from "../assets/logos_pngs/PHP.png";
import mysql from "../assets/logos_pngs/mysql.png";
import python from "../assets/logos_pngs/python.png";

// Bug Bounty Meteor Images
import john from "../assets/logos_pngs/tool-logo-john.png";
import aircrack from "../assets/logos_pngs/tool-logo-aircrack-ng.png";
import metasploit from "../assets/logos_pngs/tool-logo-metasploit.png";
import wireshark from "../assets/logos_pngs/tool-logo-wireshark.png";
import nmap from "../assets/logos_pngs/tool-logo-nmap.png";
import burpsuite from "../assets/logos_pngs/tool-logo-burp.png";
import sqlmap from "../assets/logos_pngs/tool-logo-sqlmap.png";
import ffuf from "../assets/logos_pngs/tool-logo-ffuf.png";
import starkiller from "../assets/logos_pngs/tool-logo-starkiller.png";
import hydra from "../assets/logos_pngs/tool-logo-hydra.png";
import responder from "../assets/logos_pngs/tool-logo-responder.png";
import netexec from "../assets/logos_pngs/tool-logo-netexec.png";
import powershellempire from "../assets/logos_pngs/tool-logo-powershell-empire.png";

const Home = () => {
  const fullStackMeteorImages = [
    css3,
    html5,
    reactlogo,
    mongodblogo,
    vitelogo,
    expresslogo,
    nextjslogo,
    PHP,
    mysql,
    python,
  ];

  const bugBountyMeteorImages = [
    john,
    aircrack,
    metasploit,
    wireshark,
    nmap,
    burpsuite,
    sqlmap,
    ffuf,
    starkiller,
    hydra,
    responder,
    netexec,
    powershellempire,
  ];
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];

  const fullStackData = {
    image: picRound,
    intro:
      "I'm a full stack developer with a passion for building efficient, scalable, and user-centric digital products. With experience spanning both front-end and back-end technologies, I specialize in turning ideas into responsive, high-performing web applications.",
    sections: [
      {
        title: "Tech Stack Expertise:",
        items: [
          "Frontend: React, Next.js, Vue, HTML5, CSS3, Tailwind, Sass, TypeScript, Framer Motion",
          "Backend: Node.js, Express, Python (FastAPI/Django), PHP (Laravel), Java, REST & GraphQL APIs",
          "Database: MongoDB, PostgreSQL, MySQL, Firebase, Redis",
          "DevOps & Tools: Docker, Git, CI/CD, Nginx, AWS, Vercel, Netlify",
          "Others: WebSockets, JWT Auth, OAuth, Third-party APIs, CMS integration (Sanity, Strapi, WordPress)",
        ],
      },
      {
        title: "What I Do:",
        items: [
          "Design and develop full-stack web applications from concept to deployment",
          "Create clean, maintainable, and reusable code with performance in mind",
          "Build responsive UIs and intuitive user experiences",
          "Integrate secure APIs and manage server-side logic",
          "Collaborate with cross-functional teams to meet business goals",
        ],
      },
      {
        title: "Highlights:",
        items: [
          "Built and deployed [XX+] full-stack applications (SaaS tools, dashboards, eCommerce platforms, blogs, etc.)",
          "Contributed to open-source projects and custom dev tools",
          "Always experimenting with the latest tech to stay ahead of the curve",
        ],
      },
      {
        title: "Portfolio Includes:",
        items: [
          "Live demos, source code, and GitHub repositories",
          "Dev blog posts and documentation",
          "Component libraries and reusable modules",
        ],
      },
    ],
    concludingText:
      "Always learning, always debugging — with a goal of building a safer digital world.",
    meteorImages: fullStackMeteorImages,
  };

  const bugBountyData = {
    image: picRound,
    title: "Bug Bounty",
    intro:
      "I’m a security researcher and ethical hacker focused on identifying and responsibly disclosing vulnerabilities in web applications, APIs, and network infrastructures. My work spans across various bug bounty platforms, where I’ve helped improve the security of companies ranging from startups to Fortune 500 organizations.",
    sections: [
      {
        title: "Core Areas of Focus:",
        items: [
          "Web & Application Security (OWASP Top 10)",
          "API Vulnerabilities & Misconfigurations",
          "Authentication/Authorization Bypasses",
          "Reconnaissance & OSINT",
          "Business Logic Flaws",
        ],
      },
      {
        title: "Key Highlights:",
        items: [
          "Developed custom tools and automation for recon, fuzzing, and exploit chains.",
          "Built and maintained custom recon and automation frameworks.",
          "Leveraged OSINT to uncover unintentional data exposures and shadow assets.",
          "Discovered complex logic flaws and privilege escalation chains.",
        ],
      },
      {
        title: "Portfolio Includes:",
        items: [
          "Writeups (public disclosures and redacted reports)",
          "PoC videos and custom tooling demos",
          "Vulnerability chaining scenarios and case studies",
        ],
      },
    ],
    concludingText:
      "Always learning, always debugging — with a goal of building a safer digital world.",
    meteorImages: bugBountyMeteorImages,
  };

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
        <div className="info-cards-container">
          <InfoCard {...fullStackData} />
          <InfoCard {...bugBountyData} />
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
        <div className="side-by-side">
          <div
            className="inner-side-by-side"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
            }}
          >
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
          </div>

          <ProfileCard
            name="Jeremy Dsanta"
            title="Bug Bounty Hunter"
            handle="dsanta"
            status="Online"
            contactText="Contact Me"
            avatarUrl={imgformainpage4}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
        <div style={{ height: "600px", position: "relative" }}>
          <InfiniteMenu items={items} />
        </div>
        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          {/*<TiltedCard
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
          />*/}
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
          {/*<Ballpit
            count={200}
            gravity={0.7}
            friction={0.8}
            wallBounce={0.95}
            followCursor={true}
          />*/}
        </div>
      </div>
    </>
  );
};

export default Home;
