import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Primary Education"
            subTitle="GPS Muhammad Aslam Shahani (2010 - 2014)"
            result="90%"
            des="I did my primary education from GPS Muhammad Aslam Shahani."
          />
          <ResumeCard
            title="Secondary Education(10th)"
            subTitle="GBHS Road Samaro (2014 - 2019)"
            result="85%"
            des="I did my matriculation in Science from governoment Boys Higher Secondary School Road Samaro."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intermediate Education"
            subTitle="GOVT. Degree College Umerkot - (2019 - 2021)"
            result="90.54%"
            des="I did my intermediate in Pre-Engineering from GOVT. Degree College Umerkot."
          />
          <ResumeCard
            title="Graduation"
            subTitle="MUET Jamshoro - (2021 - 2025)"
            result="3.6/4.0"
            des="I did my graduation in Software Engineering from Mehran University Of Engineering and Technology Jamshoro."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
