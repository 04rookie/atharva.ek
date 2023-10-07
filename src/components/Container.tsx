import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import IntroComponent from "./IntroComponent";
import Qualification from "./Qualification";
import Gap from "./Gap";
import WorkExp from "./WorkExp";
import Project from "./Project";
import Cert from "./Cert";
import Touch from "./Touch";
import Footer from "./Footer";
const PFP = require("../img/avatar.JPG");

export default function Container() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] overflow-y-scroll overflow-x-hidden scroll-smooth snap-mandatory snap-y">
      <div className="h-[500vh] w-[500vw] scroll-smooth snap-mandatory snap-y">
        <IntroComponent />
        <Gap />
        <Qualification />
        <Gap />
        <WorkExp />
        <Gap />
        <Project />
        <Gap />
        <Cert />
        <Gap />
        <Touch />
        <Gap />
      </div>
    </div>
  );
}
