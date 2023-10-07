"use client"
import { motion } from "framer-motion";
import { Linkedin, Github, FileText } from "lucide-react";
import Link from "next/link";
export default function Touch() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center">
      <motion.div
        className="p-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ opacity: { duration: 2 }, x: { duration: 2 } }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lets get in touch
        </h1>
        <div className=" p-4 mt-4 bg-stone-100 max-w-[400px]">
          <h3 className="mt-2">
            <ul className="list-disc list-inside px-4">
              <li className="">
                <b>Phone: </b> +91 97689 39904
              </li>
              <li className="mt-2">
                <b>Email: </b> atharva.ek@gmail.com
              </li>
              <li className="mt-2">
                <Link
                  href="https://www.linkedin.com/in/atharva-jadhav-04/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=""
                >
                  <div className="inline bg-black p-1 rounded text-center">
                    <Linkedin size={15} className="inline text-white mr-2" />
                    <h3 className="inline text-white text-center align-middle">
                      LinkedIn
                    </h3>
                  </div>
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="https://github.com/04rookie"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=""
                >
                  <div className="inline bg-black p-1 rounded text-center">
                    <Github size={15} className="inline text-white mr-2" />
                    <h3 className="inline text-white text-center align-middle">
                      Github
                    </h3>
                  </div>
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="https://drive.google.com/file/d/1bBT9acVI6jFqBqYQgOPHDxeJ6o3b1iP5/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=""
                >
                  <div className="inline bg-black p-1 rounded text-center">
                    <FileText size={15} className="inline text-white mr-2" />
                    <h3 className="inline text-white text-center align-middle">
                      Resume
                    </h3>
                  </div>
                </Link>
              </li>
            </ul>
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
