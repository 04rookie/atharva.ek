"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
export default function Degree(props: {
  degreeName: string;
  university: string;
  cgpa: number;
  transcript: string;
  date: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ opacity: { duration: 2 }, x: { duration: 2 } }}
      className=" p-4 mt-4 bg-stone-100"
    >
      <div>
        <h2 className="font-medium">{props.degreeName}</h2>
        <div className="h-[1px] border mb-2 w-full"></div>
        <h3>{props.university}</h3>
        <div className="flex flex-row justify-between">
          <h3>
            <b>CGPA:</b> {props.cgpa}
          </h3>
          <h3>
            <b>Year:</b> {props.date}
          </h3>
        </div>
        <h3>
          <b>Transcript:</b>
          <Button asChild className="ml-4 p-0 h-0">
            {/* <Link href={props.transcript}>Link</Link> */}
            <a
              target="_blank"
              href={props.transcript}
              rel="noopener noreferrer"
            >
              <h3 className="inline text-center align-middle">
                <u>View</u>
              </h3>
              <ExternalLink size={15} className="inline ml-1" />
            </a>
          </Button>
        </h3>
      </div>
    </motion.div>
  );
}
