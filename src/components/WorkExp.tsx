"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const workExperiences = [
  {
    id: 1,
    title: "Research Assistant",
    company: "University at Buffalo",
    duration: "March 2025 - Present",
    description: [
      "Visualized acoustic word clusters in 3D by projecting wav2vec2 audio embeddings with t-SNE and aligning text using the Montreal Forced Aligner (MFA).",
      "Investigating duration reduction mechanisms in state-of-the-art automatic speech recognition (ASR) and text-to-speech (TTS) systems, focusing on homophones and lexical frequency.",
      "Devising methods to generate FOILS for a Maze app, enabling users to learn low-resource languages with ease.",
      "Replicating the experiments of 'BERT Rediscovers the Classical NLP Pipeline' with Pythia Model."
    ]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Crimsonbeans Ltd",
    duration: "Oct 2023 - Apr 2024",
    description: [
      "As a member of the payment processing team, implemented in-app purchases for the Play Store and App Store, integrating recurring payments and cancellation features.",
      "Optimized transaction processing by deploying dedicated cloud functions to handle purchase validations, reducing processing time by 15% and improving user experience.",
      "Conducted a comprehensive analysis of legacy Bluetooth code in a React Native app, identified and resolved intermittent disconnections, leading to a 30% growth in stability through code refactoring and error handling."
    ]
  },
  {
    id: 3,
    title: "Jr. Software Engineer",
    company: "Crimsonbeans Ltd",
    duration: "Dec 2021 - Jan 2023",
    description: [
      "Iguanalytics - Built a React native app that fetches data from Australian Energy Market Operators (AEMO) enabling streamlined insights on energy pricing & empowering energy industry professionals with up-to-date information for market trading.",
      "Stockvel - Developed a website that allowed small communities to invest, take loans & maintain records using ReactJS.",
      "TNE - Migrating firebase 52 collections, 94 functions & all authentication records to another GCP project for development build.",
      "Rainbow - Developed a procurement tool in the ReactJS that enabled clients of Rainbow to bid & procure over 2800 products & services."
    ]
  }
];

export default function WorkExp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextExperience = () => {
    setDirection(1); // Going forward (right to left)
    setCurrentIndex((prev) => (prev + 1) % workExperiences.length);
  };

  const prevExperience = () => {
    setDirection(-1); // Going backward (left to right)
    setCurrentIndex((prev) => (prev - 1 + workExperiences.length) % workExperiences.length);
  };

  const goToExperience = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center">
      <motion.div
        className="p-4 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ opacity: { duration: 2 }, y: { duration: 2 } }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Work Experience
        </h1>
        
        <div className="relative mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevExperience}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous experience"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextExperience}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next experience"
          >
            <ChevronRight size={24} />
          </button>

          {/* Experience Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                transition={{ duration: 0.3 }}
                className="bg-stone-100 p-6 rounded-lg mx-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-medium text-xl">
                      {workExperiences[currentIndex].title}
                    </h2>
                    <h3 className="text-lg text-gray-700">
                      {workExperiences[currentIndex].company}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                    {workExperiences[currentIndex].duration}
                  </span>
                </div>
                
                <div className="h-[1px] border mb-4 w-full"></div>
                
                <ul className="list-disc list-inside space-y-2">
                  {workExperiences[currentIndex].description.map((item, index) => (
                    <li key={index} className="text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {workExperiences.map((_, index) => (
              <button
                key={index}
                onClick={() => goToExperience(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
