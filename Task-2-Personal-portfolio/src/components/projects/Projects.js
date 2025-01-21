import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, project_4, project_5, project_6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Personal Portfolio"
          des="I have created my personal portfolio using html and CSS and javascript. I create this portfolio to ehance my front-end skills."
          src={projectOne}
          live_demo="https://hareshku.github.io/haresh-kumar/"
        />
        <ProjectsCard
          title="React Portfolio"
          des="As a React Developer Intern at CodingSamurai, I was assigned the task of creating this personal portfolio using React.js."
          src={projectTwo}
          live_demo="https://hareshku.github.io/haresh-/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="As a React Developer Intern at CodingSamurai, I was assigned the task of creating this e-commerce website using React.js and Redux."
          src={projectThree}
          live_demo="https://hareshku.github.io/haresh-/"
        />
        <ProjectsCard
          title="Mobile App Development"
          des="As my 5th-semester final project for the Software Construction and Development course, I developed this website for a mobile app development company using HTML, CSS, and JavaScript."
          src={project_4}
          live_demo="https://hareshku.github.io/SCD-Project/"
        />
        <ProjectsCard
          title="E-Learning Mobile App"
          des="As my 6th-semester final project for the Mobile App Development course, I developed this E-learning a mobile application for learning through online courses using flutter."
          src={project_5}
          live_demo="https://hareshku.github.io/haresh-kumar/"
        />
        <ProjectsCard
          title="Product Sale Dashboard"
          des="I developed this product sale dashboard using React.js and Chart.js for Networkalgo Business Solution, offering real-time data visualization to track sales metrics and performance efficiently."
          src={project_6}
          live_demo="https://hareshku.github.io/haresh-kumar/"
        />
      </div>
    </section>
  );
}

export default Projects