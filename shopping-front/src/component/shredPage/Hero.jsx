const Hero = ({home = 'home'}) => {
  return (
    <div id="hero" className=" w-full h-screen">
      <h1 id="back_Home">{home}</h1>
      <div  className="hero_body w-5/6 mx-auto rounded-[50px] grid justify-center">
        <img
          className=" mix-blend-darken"
          src="https://i.pinimg.com/736x/0d/4f/e4/0d4fe41a38c36c674455966dc941ad3b.jpg"
          alt=""
        />
        <h1 className=" text-3xl  md:text-5xl lg:text-7xl xl:text-9xl  uppercase font-bold">your property is our assect</h1>
      </div>
    </div>
  );
};

export default Hero;
