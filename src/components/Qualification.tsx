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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ opacity: { duration: 2 }, y: { duration: 2 } }}
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        >
          Qualifications
        </motion.h1>
        <Degree
          degreeName="Master of Science in Computer Science Engineering"
          university="University at Buffalo"
          gpa={3.81}
          transcript="/img/atharva_ub_ms_transcript.pdf"
          date="2024-2026"
        />
        <Degree
          degreeName="Master of Science in Computer Application"
          university="Symbiosis Institute of Computer Studies & Research"
          cgpa={8.83}
          transcript="/img/atharva_mca_transcript.pdf"
          date="2020-2022"
        />
        <Degree
          degreeName="Bachelor of Computer Application"
          university="Symbiosis Institute of Computer Studies & Research"
          cgpa={7.93}
          transcript="/img/atharva_bca_transcript.pdf"
          date="2017-2020"
        />
      </div>
    </div>
  );
}
