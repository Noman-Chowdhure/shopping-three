import LocomotiveScroll from "locomotive-scroll";
import Hero from "../shredPage/Hero";
import NewPG from "./NewPG";
import CategorePG from "./CategorePG";

const HomePG = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className=" overflow-hidden">
      <Hero></Hero>
      <NewPG></NewPG>
      <CategorePG></CategorePG>
    </div>
  );
};

export default HomePG;
