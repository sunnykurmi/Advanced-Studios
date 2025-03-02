import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scene } from './Effects/Scene';
import Magnet from './Effects/Magnet';
import Marquee from "react-fast-marquee";
import DecayCard from './Effects/DecayCard';
import { VictoryScene } from './Effects/VictoryScene';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const mainRef = useRef(null)
  const sceneRef = useRef(null)
  const [progress, setProgress] = useState(0)


  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top top',
        pin: true,
        pinSpacer: true,
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress)
        }
      }
    })
      .to("#text", { y: "-100vh", duration: 3 }, "scene")
      .to(sceneRef.current, { opacity: 0, delay: 15 }, "opa")
      .to("#scrollText", { opacity: 0 }, "opa")
      .fromTo("#videodiv", { opacity: 0, transform: "scale(.2) rotateY(-90deg) rotateX(-5deg) " }, {
        opacity: 1, transform: "scale(1) rotateY(0deg) rotateX(0deg) ", delay: 15, duration: 5
      }, "opa")
      .fromTo("#marqtext", { opacity: 0, transform: "rotate(-10deg) " }, {
        opacity: 1, transform: " rotate(3deg) ", delay: 15.5, duration: 4
      }, "opa")

  }, [])

  return (
    <div ref={mainRef} className='overflow-x-hidden bg-black'>
      <Suspense fallback={null}>
        <div className='w-full relative grid place-items-center  '>
          <h1 id='text' className='text-7xl absolute z-[99] left-12 top-10 text-white w-[45%]'>
            Advanced Team ®
            Digital Design
            Boutique with Focus
            on Aesthetics</h1>
          <h1 id='text' className='text-base absolute z-[99] left-[20%] top-[35%] text-white w-[30%]'>
            We pride ourselves on our ability to craft digital products that not only meet but exceed the expectations of our clients. With a wealth of experience and expertise in the field of digital product development, we understand how to design user-friendly interfaces that captivate and engage audiences.</h1>
          <h1 id='scrollText' className='text-base fixed z-[99] left-12 top-[13%] text-white '>Scroll Down</h1>
          <div ref={sceneRef} className="w-full h-[100vh]">
            <Canvas style={{ pointerEvents: 'none' }}  >
              <Scene progress={progress} />
            </Canvas>
          </div>
          <div id='videodiv' className="w-[65%] relative h-[75]">
            <div className="absolute z-[1] flex items-center justify-center text-white font-semibold cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Magnet padding={50} disabled={false} magnetStrength={2} >
                <div className=" bg-[#C24040] size-28 flex items-center justify-center rounded-full">
                  <p>Full Video</p>
                </div>
              </Magnet>
            </div>
            <img className='w-full h-full object-cover' src="/images/videoimage.jpg" alt="" />
          </div>
          <div id='marqtext' className="   w-full flex items-center scrollernone justify-center text-white font-semibold  ">
            <Marquee>
              <p className='text-6xl'> - Showreel </p>
              <p className='text-6xl'> - Showreel </p>
              <p className='text-6xl'> - Showreel  </p>
              <p className='text-6xl'> - Showreel </p>
              <p className='text-6xl'> - Showreel </p>

            </Marquee>
          </div>
          <div className="w-full text-white  px-[40vh] h-[100vh] relative  ">
            <p className=' tracking-tighter text-7xl '>Every project made by advanced team is created at the intersection between design and technology, making the future — today</p>
            <div className="w-full flex h-[40vh] ">
              <div className="w-1/2 h-full flex items-center justify-center">
                <Magnet padding={50} disabled={false} magnetStrength={2} >
                  <div className=" hh text-5xl relative overflow-hidden -rotate-45  size-40 rounded-full  flex items-center border-2 border-white justify-center text-white font-semibold cursor-pointer ">
                    <p className='tt text-white z-[9]'>→</p>
                    <div className=" oo  absolute rounded-full bg-white transition-all duration-700"></div>
                  </div>

                </Magnet>
              </div>
              <div className="w-1/2 h-full border-b-2  mt-10 ">
                <p>With over 200 projects completed, our team has gained a comprehensive understanding of user behavior patterns. This knowledge allows us to provide our clients with efficient and effective solutions to their digital challenges. By leveraging our experience, we are able to achieve maximum efficiency in solving client problems and delivering successful outcomes.</p></div>
            </div>
          </div>


        </div>
      </Suspense>

      <div className="w-full h-[70vh]  flex items-center justify-center ">
        <div id='imgmarqee' className="  h-[35vh]  relative  w-full flex items-center scrollernone justify-center text-white font-semibold  ">
          <Marquee>
            <img className='w-[20vw] shrink-0  bg-opacity-35 h-full' src="/images/1.jpg" alt="" />
            <img className='w-[20vw] shrink-0  bg-opacity-35 h-full' src="/images/2.jpg" alt="" />
            <img className='w-[20vw] shrink-0  bg-opacity-35 h-full' src="/images/3.jpg" alt="" />
            <img className='w-[20vw] shrink-0  bg-opacity-35 h-full' src="/images/4.jpg" alt="" />
            <img className='w-[20vw] shrink-0  bg-opacity-35 h-full' src="/images/5.jpg" alt="" />
            <img className='w-[20vw] shrink-0  bg-opacity-35 h-full' src="/images/6.jpg" alt="" />
            <img className='w-[20vw] shrink-0  bg-opacity-35 h-full' src="/images/7.jpg" alt="" />

          </Marquee>
          <div className="w-full h-full absolute z-[1] bg-[#0000006f]"></div>
        </div>
        <div className="absolute text-8xl left-32 font-semibold opacity-100 z-[9] text-white">
          <p>UX Strategy  <br />
            UI Design <br />
            Development <br />
            Communication</p>
        </div>
      </div>
      <div className="w-full  text-white ">
        <div className="w-full text-center">
          <p className='text-[10vw] mt-5 '>Recent Works</p>
        </div>
        <div className="w-full items-center flex flex-col justify-center">
          <DecayCard width={600} height={800} image="/images/cardimg3.jpg">
          </DecayCard>
        </div>
        <div className="w-full items-center flex justify-evenly">
          <DecayCard width={600} height={800} image="/images/cardimg2.jpg">
          </DecayCard>
          <DecayCard width={600} height={800} image="/images/cardimg1.jpg">
          </DecayCard>
        </div>

      </div>

      <div className="w-full h-[80vh] ">
        <div className="  w-full flex items-center  scrollernone justify-center text-white   ">
          <Marquee>
            <p className='text-8xl'> - Awards </p>
            <p className='text-8xl'> - Recognition </p>
            <p className='text-8xl'> - Awards  </p>
            <p className='text-8xl'> - Recognition </p>
            <p className='text-8xl'> - Awards  </p>
          </Marquee>
        </div>
        <div className=" w-full pl-[20vh]  text-white pt-20">
          <p className=' tracking-tighter text-6xl w-[60%] '>We are proud to be the 2019 "Studio of the Year" at the CSS Design Awards. Our project was also honored as "E-Commerce of the Year" by the Awwwards in 2022.</p>
        </div>
      </div>
      <Suspense fallback={null}>
        <div className="w-full relative h-[100vh]">
          <Canvas style={{ pointerEvents: 'none' }}  >
            <VictoryScene />
          </Canvas>
          <div className=" absolute top-[28%] z-[-1]  w-full flex items-center scrollernone justify-center text-white   ">
          <Marquee>
            <p className='text-8xl'> - Awards </p>
            <p className='text-8xl'> - Recognition </p>
            <p className='text-8xl'> - Awards  </p>
            <p className='text-8xl'> - Recognition </p>
            <p className='text-8xl'> - Awards  </p>
          </Marquee>
        </div>
        </div>
      </Suspense>



    </div>
  );
};

export default Home





