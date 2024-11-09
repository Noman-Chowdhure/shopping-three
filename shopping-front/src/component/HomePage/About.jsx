import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(()=>{
     const time = gsap.timeline()
     gsap.from('#about',{
        scale:0.5,
        duration:2,
       scrollTrigger:{
        trigger:'#about',
        scroller:'body',
        start:'top 70%',
        end:'top -100%',
        markers:true
       }
     })
  },[])
  return (
    <div id="about">
        <div className="about_body w-full h-fit grid grid-cols-2 justify-center justify-items-center ">
            <div className="img_section">
                <img src="https://i.pinimg.com/736x/09/a8/5e/09a85e10e946b17eab94dea989cbf94a.jpg" alt="" />
            </div>
            <div className="text_section">
                <h1 className=" text-4xl">we are the part of your  <span className=" text-9xl font-extrabold uppercase">family</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate maxime blanditiis sunt magnam veniam, eveniet reiciendis, vel delectus quaerat minima suscipit sequi, voluptatum quia. Cumque odio consectetur maxime fugit.</p>
            </div>
        </div>
    </div>
  )
}

export default About