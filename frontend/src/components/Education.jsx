import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const educations = [
  {
    title: "Bachelor of Technology in Computer Science And Engineering",
    institute_name: "SRM University",
    date: "2021 - 2025",
    points: [
      "CGPA:  8.78 /10",
      "Specialized in software engineering and data structures.",
      "Completed multiple projects on web development and algorithms.",
    ],
    iconBg: "#0bbf",
  },
  {
    title: "Higher Secondary Education (XII)",
    institute_name: "West Bengal Council of Higher Secondary Education",
    date: "2020 - 2021",
    points: [
      "Score: 79.5 %",
      "Focused on Mathematics, Physics, Chemistry and Biology.",
    ],
    iconBg: "#f39c12",
  },
  {
    title: " Secondary Education (X)",
    institute_name: "West Bengal Board of Secondary Education (WBBSE)",
    date: "2018 - 2019",
    points: [
      "Score: 74.14 %",
      "Focused on general Subjects.",
    ],
    iconBg: "#ff00cb",
  },
];

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    icon={
      <div
        className="flex justify-center items-center w-full h-full text-white font-bold text-[16px]"
        style={{
          background: education.iconBg,
          borderRadius: "50%",
        }}
      >
        {education.institute_name[0]} {/* First letter of the company name */}
      </div>
    }
    iconStyle={{ background: education.iconBg }}
    date={education.date}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {education.institute_name}
      </p>
    </div>

    <ul className="mt-5 ml-5 list-disc space-y-2">
      {education.points.map((point, index) => (
        <li
          key={`education-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Education = () => (
  <div className="py-10 px-5 ">
    <div className="text-center">
      <p className="text-white text-xl font-medium mb-2 ">What I have done so far</p>
      <ScrollAnimation animateIn="animate__animated animate__fadeInLeft" duration={.8}> 
                <h2 className="text-7xl mb-8   font-extrabold text-center text-cyan-400 pb-10">
                      Education
                </h2>
           </ScrollAnimation>
    </div>

    <div className="mt-10 ">
      <VerticalTimeline>
        {educations.map((education, index) => (
          <EducationCard key={`education-${index}`} education={education} className="animate-slideRight" />
        ))}
      </VerticalTimeline>
    </div>
  </div>
);

export default Education;
