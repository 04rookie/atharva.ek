"use client"
import { motion } from "framer-motion";
export default function WorkExp() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center">
      <motion.div
        className="p-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ opacity: { duration: 2 }, x: { duration: 2 } }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Work Experience
        </h1>
        <div className=" p-4 mt-4 bg-stone-100 max-w-[600px]">
          <h2 className="font-medium">
            Jr. Software Engineer at Crimsonbeans Ltd.
          </h2>
          <div className="h-[1px] border mb-2 w-full"></div>
          <h3>From 6th Dec 2021 - 13th Jan 2023.</h3>
          <h3 className="mt-2">
            <b>Projects:</b>
            <ul className="list-disc list-inside px-4">
              <li className="">
                <b>Iguanalytics </b> - Built a React native app that fetches
                data from Australian Energy Market Operators (AEMO) enabling
                streamlined insights on energy pricing & empowering energy
                industry professionals with up-to-date information for market
                trading.
              </li>
              <li className="mt-2">
                <b>Stockvel </b> - Developed a website that allowed small
                communities to invest, take loans & maintain records using
                ReactJS.
              </li>
              <li className="mt-2">
                <b>TNE </b> - Migrating firebase 52 collections, 94 functions &
                all authentication records to another GCP project for
                development build.
              </li>
              <li className="mt-2">
                <b>Rainbow </b> - Developed a procurement tool in the ReactJS
                that enabled clients of Rainbow to bid & procure over 2800
                products & services.
              </li>
            </ul>
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
