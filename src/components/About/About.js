import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">
            <ScrollAnimation animateIn="fadeInLeft">
              <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
            </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="fadeInLeft">
                Hello! I'm <strong>Aditya Kondhare</strong>, a passionate and
                dedicated software developer with a strong background in
                creating innovative solutions and building robust applications.
                With expertise in multiple programming languages and frameworks,
                I thrive on solving complex problems and transforming ideas into
                reality.
              </ScrollAnimation>

              <br />
              <br />

              <ScrollAnimation animateIn="fadeInLeft">
                My journey into the world of technology began with a strong
                passion for problem-solving, which led me to pursue the Computer
                Systems Technology program. Despite its challenges, I remained
                determined and forged lasting friendships that supported me
                throughout this demanding program.
              </ScrollAnimation>

              <br />
              <br />

              <ScrollAnimation animateIn="fadeInLeft">
                Collaboration and continuous learning are at the core of my
                professional ethos. I enjoy working in dynamic teams and believe
                that the best solutions come from diverse perspectives and
                shared knowledge. When I'm not coding, you can find me exploring
                new tech innovations, contributing to open-source projects, or
                indulging in my hobbies like Playing, Travelling, etc. Feel free
                to browse through my portfolio to see some of the exciting
                projects I’ve worked on. If you’re interested in collaborating
                or just want to chat about tech, don’t hesitate to get in touch!
                <div className="tagline2">
                  I have become confident using the following technologies:
                </div>
              </ScrollAnimation>

              <Technologies>
                {stackList.map((stack, index) => (
                  <ScrollAnimation animateIn="bounceIn" key={index}>
                    <Tech key={index} className="tech">
                      <TechImg src={stack.img} alt={stack.name} />
                      <TechName>{stack.name}</TechName>
                    </Tech>
                  </ScrollAnimation>
                ))}
              </Technologies>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;
