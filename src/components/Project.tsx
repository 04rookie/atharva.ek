import { motion } from "framer-motion";
export default function Project() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center">
      <motion.div
        className="p-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ opacity: { duration: 2 }, x: { duration: 2 } }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Personal Project
        </h1>
        <div className=" p-4 mt-4 bg-stone-100 max-w-[600px]">
          <h3 className="mt-2">
            <ul className="list-disc list-inside px-4">
              <li className="">
                <b>Visualization of WHO. data </b> - Visualizes 618 datasets
                from WHO API in line-charts dynamically, built in latest NextJS
                13 framework.
              </li>
              <li className="mt-2">
                <b>Video Calling website </b> - A website
                in MERN stack that facilitates doctor-patient counseling by
                video chat using WebRTC technology. Using peer to peer
                architecture, the users can video call with nearly 0
                infrastructure cost.
              </li>
              <li className="mt-2">
                <b>A comparative case study of different algorithms </b> -
                Trained various models that predicted if a customer’s loan
                application would be approved with precision and recall of 98%.
              </li>
              <li className="mt-2">
                <b>Predicting chances of heart disease </b> - Trained 2 models
                which could predict whether a person has heart disease with a
                precision & recall of 85%.
              </li>
            </ul>
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
