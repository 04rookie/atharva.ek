"use client"
import Image from "next/image";

export default function IntroComponent() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center relative">
      {/* Commented out Hello animation */}
      {/* <motion.h1
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
      </motion.h1> */}
      
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/img/avatar.JPG"
          alt="Atharva Jadhav profile picture"
          height={200}
          width={200}
          style={{ borderRadius: 100 }}
          priority
        />
      </div>
      
      <h1 className="leading-10 [&:not(:first-child)]:mt-6 text-4xl p-4 text-center">
        I am Atharva Jadhav, a <strong>developer</strong> from
        Mumbai, India.
      </h1>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
        <span className="text-sm">Scroll down</span>
      </div>
    </div>
  );
}
