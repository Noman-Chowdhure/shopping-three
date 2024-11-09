import Hero from "../shredPage/Hero";
import About from "./About";
import LocomotiveScroll from 'locomotive-scroll';
import Service from "./Service";



const HomePG = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className=" overflow-hidden">
      <Hero></Hero>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default HomePG;
