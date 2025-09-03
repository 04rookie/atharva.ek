"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroComponent() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center">
      <motion.h1
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          position: "absolute",
          display: "none",
          rotate: 360,
          scale: 0,
        }}
        transition={{ delay: 1 }}
        exit={{ display: "none", position: "absolute" }}
      >
        Hello!
      </motion.h1>
      {/* <div className="flex flex-col"> */}
      <motion.div
        initial={{ opacity: 0, position: "absolute" }}
        animate={{ opacity: 1, position: "static" }}
        transition={{ delay: 2, opacity: { duration: 2 } }}
        className="flex flex-col justify-center items-center"
      >
        <Image
          src="/img/avatar.JPG"
          alt="Atharva Jadhav profile picture"
          height={200}
          width={200}
          style={{ borderRadius: 100 }}
          priority
        />
      </motion.div>
      <motion.h1
        className="leading-10 [&:not(:first-child)]:mt-6 
                  text-4xl p-4 text-center"
        initial={{ opacity: 0, position: "absolute" }}
        animate={{ opacity: 1, position: "static", y: [0, 50] }}
        transition={{
          delay: 2,
          y: { duration: 2 },
        }}
        exit={{ display: "none" }}
      >
        I am Atharva Jadhav, a <strong>developer</strong> from
        Mumbai, India.
      </motion.h1>
      {/* </div> */}
    </div>
  );
}
