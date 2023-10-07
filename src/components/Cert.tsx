"use client"
import { motion } from "framer-motion";
import { Button } from "./ui/button";
export default function Cert() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center">
      <motion.div
        className="p-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ opacity: { duration: 2 }, y: { duration: 2 } }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Certificate & Courses
        </h1>
        <div className=" p-4 mt-4 bg-stone-100 max-w-[600px]">
          <h3 className="mt-2">
            <ul className="list-disc list-inside px-4">
              <li className="">
                Machine Learning by Andrew Ng (Coursera & Stanford online).
                <br />
                <Button asChild className="ml-0 p-0 h-0">
                  {/* <Link href={props.transcript}>Link</Link> */}
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/6DN96HXT7CVD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                    rel="noopener noreferrer"
                  >
                    View certificate.
                  </a>
                </Button>
              </li>
              <div className="h-[1px] border my-2 w-full"></div>
              <li className="mt-2">
                The complete 2021 Web development Bootcamp by Angela Yu (UDEMY).
                <br />
                <Button asChild className="ml-0 p-0 h-0">
                  {/* <Link href={props.transcript}>Link</Link> */}
                  <a
                    target="_blank"
                    href="https://www.udemy.com/certificate/UC-16f52188-c106-454e-b316-4547708836db/"
                    rel="noopener noreferrer"
                  >
                    View certificate.
                  </a>
                </Button>
              </li>
              <div className="h-[1px] border my-2 w-full"></div>
              <li className="mt-2">
                Architecting with Google Compute Engine. (Coursera & Qwiklabs).
                <br />
                <Button asChild className="ml-0 p-0 h-0">
                  {/* <Link href={props.transcript}>Link</Link> */}
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/specialization/YC4H6DPR25AY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
                    rel="noopener noreferrer"
                  >
                    View certificate.
                  </a>
                </Button>
              </li>
              <div className="h-[1px] border my-2 w-full"></div>
              <li className="mt-2">
                Participation in Symtaxify Hackathon. (ACM).
              </li>
            </ul>
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
