import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer Intern"
            subTitle="National Freelancing Training Program - (2022 - 23)"
            result="Jamshoro, Pakistan"
            des="As a web developer intern, I worked on multiple project, Including the front-end and back-end part of the project."
          />
        </div>
      </div>
      <div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Developer"
            subTitle="NetworkAlgo Business Solution (2024 - present)"
            result="India"
            des="I am working as a react developer in NetworkAlgo Business Solution. I am handling the front-end part of the project."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
