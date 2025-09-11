"use client"
import { motion } from "framer-motion";
export default function Project() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-start bg-white snap-center py-4 overflow-y-auto">
      <motion.div
        className="p-4 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ opacity: { duration: 2 }, y: { duration: 2 } }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-6">
          Personal and Academic Projects
        </h1>
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-3">
                  <b>Independent Study (Thesis advisor: Dr. Nasrin Akhter) (Dec 2024 – Present)</b>
                </h3>
                <div className="h-[1px] border mb-3 w-full"></div>
                <p className="text-sm leading-relaxed">
                  • Architecting a generalized multilingual SER model that rivals specialized systems, targeting an average performance within 20% of single-language SOTA models, by fine-tuning Wav2Vec2 with a multi-task ASR approach.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-3">
                  <b>Augmentative and alternative communication for societal good  (Mar 2025 – May 2025)</b>
                </h3>
                <div className="h-[1px] border mb-3 w-full"></div>
                <p className="text-sm leading-relaxed">
                  • Created an efficient, on-device conversational assistant for AAC users, packaged into a 5GB deployable model that runs without an internet connection, by fine-tuning and quantizing LLMs like LLAMA3-8B for local inference.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-3">
                  <b>Traffic light automation using RL to facilitate emergency vehicles  (Jan 2025 – Apr 2025)</b>
                </h3>
                <div className="h-[1px] border mb-3 w-full"></div>
                <p className="text-sm leading-relaxed">
                  • Minimized emergency vehicle delay at intersections, reducing average wait times by 45% compared to a standard timed system, by implementing and comparing a suite of RL algorithms (Q-Learning to DDQN) in the SumoRL environment.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-3">
                  <b>Wikipedia Chat Bot  (Oct 2024 – Dec 2024)</b>
                </h3>
                <div className="h-[1px] border mb-3 w-full"></div>
                <p className="text-sm leading-relaxed">
                  • Built a scalable search and summarization system by scraping 50,000 Wikipedia summaries, indexing them with SOLR, and deploying a Flask server with a React frontend on GCP.
                  <br />
                  • Designed an intelligent response pipeline using zero-shot classification for message categorization, integrating a Blenderbot-based chatbot for casual conversations and T5 for summarizing SOLR query results.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-3">
                  <b>In-place convolution with OpenMP  (Oct 2024)</b>
                </h3>
                <div className="h-[1px] border mb-3 w-full"></div>
                <p className="text-sm leading-relaxed">
                  • Developed a C++ program applying a 3 × 3 matrix kernel to a 1D vector (representing a 2D float array) using multithreading with OpenMP, achieving 70% efficiency on 64 processors in an HPC environment.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-3">
                  <b>Visualization of WHO. data</b>
                </h3>
                <div className="h-[1px] border mb-3 w-full"></div>
                <p className="text-sm leading-relaxed">
                  Visualizes 618 datasets from WHO API in line-charts dynamically, built in latest NextJS 13 framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
