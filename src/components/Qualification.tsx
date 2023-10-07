"use client"
import { motion } from "framer-motion";
import Degree from "./Degree";
export default function Qualification() {
  return (
    <div
      id="div2"
      className="h-[100vh] w-[100vw]  snap-center flex flex-col justify-center items-center"
    >
      <div className="p-4">
        <motion.h1
          // onViewportEnter={() => console.log("ENTERED")}
          // onViewportLeave={() => console.log("LEFT")}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ opacity: { duration: 2 }, x: { duration: 2 } }}
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        >
          Qualifications
        </motion.h1>
        <Degree
          degreeName="Bachelor of Computer Application"
          university="Symbiosis Institute of Computer Studies & Research"
          cgpa={7.93}
          transcript="https://drive.google.com/file/d/1km-evwkxhvKs82T-HjZuDXyGLo_iM9NQ/view?usp=sharing"
          date="2017-2020"
        />
        <Degree
          degreeName="Master of Science in Computer Application"
          university="Symbiosis Institute of Computer Studies & Research"
          cgpa={8.83}
          transcript="https://drive.google.com/file/d/1oCJoaCmtz4ep-xX55XxakaqN-bM6I8je/view?usp=sharing"
          date="2020-2022"
        />
      </div>
    </div>
  );
}
