"use client"
import { motion } from "framer-motion";

const researchProjects = [
  {
    id: 1,
    title: "Multi-Task Learning for Low-Resource Speech Emotion Recognition",
    supervisor: "Dr. Nasrin Akhter",
    description: "Developing a Multi-Task Learning (MTL) model for low-resource Speech Emotion Recognition (SER) by leveraging ASR and multilingual datasets to distill powerful linguistic and prosodic features."
  },
  {
    id: 2,
    title: "Duration Reduction in ASR/TTS Systems with Acoustic Analysis",
    supervisor: "Prof. Cassandra Jacobs",
    description: "Investigated duration reduction in ASR/TTS systems by analyzing homophone and lexical frequency effects, and developed 3D visualizations of acoustic word clusters using wav2vec2, t-SNE, and the Montreal Forced Aligner (MFA)."
  }
];

export default function Research() {
  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center py-8">
      <motion.div
        className="p-4 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ opacity: { duration: 2 }, y: { duration: 2 } }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8">
          Research
        </h1>
        <div className="space-y-6">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                opacity: { duration: 1.5 }, 
                y: { duration: 1.5 },
                delay: index * 0.2
              }}
              className="bg-stone-100 p-6 rounded-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-medium text-xl text-gray-800">
                  {project.title}
                </h2>
                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                  {project.supervisor}
                </span>
              </div>
              
              <div className="h-[1px] border mb-4 w-full"></div>
              
              <p className="text-sm leading-relaxed text-gray-700">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
