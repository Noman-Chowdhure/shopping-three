import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavItmes from "./NavItmes";
gsap.registerPlugin(ScrollTrigger);
const Hero = ({ home = "sofa house" }) => {
  useGSAP(() => {
    gsap.to("#hero", {
      scale: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#hero",
        scroller: "body",
        start: "top end",
        end: "bottom end",
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="hero" className=" w-full md:h-screen h-fit">
      <div className="navBar">
        <NavItmes></NavItmes>
      </div>
      <div className="body grid justify-center">
        <h1 id="back_Home" className=" font-PT">{home}</h1>
        <img className=" mix-blend-darken"
          src="https://i.pinimg.com/736x/a2/2c/c1/a22cc1d5d8245b88eb4f8e417fa8ca99.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
