import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import cartoon from '../assets/3d-cartoon.png'

const About = () => {
  return (
    <section id="about" className="pt-10 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
      <div className="about-text border-spacing-2 border-white">
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={.4}> 
          <h2 className="text-7xl mb-8 mt-0  font-extrabold pl-5 text-cyan-400">
            About Me
          </h2>
        </ScrollAnimation>

        <div className="border-cyan-400 border-4 m-5 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-2xl hover:shadow-[10px_5px_60px_25px_rgba(0,255,255,0.4)]  ">
        <ScrollAnimation animateIn="animate__animated animate__fadeInLeft " delay={.1 * 1000}>
          <p className="sm:text-2xl lg:text-lg leading-relaxed font-medium  pl-10 pr-5 pt-5 ">
            Hi there! I'm Anish, and I am pursuing a B.Tech degree in Computer Science Engineering at SRM University. Throughout my academic journey, I have developed a strong foundation in data structures, web development, algorithms and more.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p className="sm:text-2xl lg:text-lg leading-relaxed font-medium pl-10 pr-5">
          My passion for technology drives me to excel in development roles, where I aim to create innovative and efficient solutions. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" delay={0.3 * 1000}>
          <p className="sm:text-2xl lg:text-lg leading-relaxed font-medium  pl-10 pr-5 pb-5">
          Now, I am constantly seeking opportunities to expand my knowledge and stay updated with the latest advancements.                 I am driven to leverage my skills and experiences to make a meaningful impact in the field of computer science engineering.
          </p>
        </ScrollAnimation>
        </div>

      </div>
      <div className="about-image text-center ">
        <ScrollAnimation animateIn="animate__animated animate__fadeInRight" delay={0.2 * 1000}>
          <div className=" sm:w-fit lg:w-3/4 mx-auto aspect-square   ">
           <img src={cartoon} alt="3d Image"  />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
