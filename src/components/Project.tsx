"use client"
import { motion } from "framer-motion";
export default function Project() {
  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white snap-center py-8">
      <motion.div
        className="p-4 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ opacity: { duration: 2 }, y: { duration: 2 } }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8">
          Personal and Academic Projects
        </h1>
        <div className="bg-stone-100 p-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="mt-2">
            <ul className="list-disc list-inside px-4 space-y-4">
              <li className="">
                <b>Probing Wav2Vec2 Jun 2025 – Aug 2025</b>
                <br />
                • Visualized acoustic word clusters in 3D by projecting wav2vec2 audio embeddings with t-SNE and aligning text using the Montreal Forced Aligner (MFA).
              </li>
              <div className="h-[1px] border my-4 w-full"></div>
              <li className="mt-2">
                <b>Augmentative and alternative communication for societal good (GitHub) Mar 2025 – May 2025</b>
                <br />
                • Developed a locally deployable NLP tool for AAC users, leveraging GPT4ALL and fine-tuned language models to generate fast, context-aware, and empathetic responses.
              </li>
              <div className="h-[1px] border my-4 w-full"></div>
              <li className="mt-2">
                <b>Wikipedia Chat Bot (GitHub) Oct 2024 – Dec 2024</b>
                <br />
                • Built a scalable search and summarization system by scraping 50,000 Wikipedia summaries, indexing them with SOLR, and deploying a Flask server with a React frontend on GCP.
                <br />
                • Designed an intelligent response pipeline using zero-shot classification for message categorization, integrating a Blenderbot-based chatbot for casual conversations and T5 for summarizing SOLR query results.
              </li>
              <div className="h-[1px] border my-4 w-full"></div>
              <li className="mt-2">
                <b>In-place convolution with OpenMP (GitHub) Oct 2024</b>
                <br />
                • Developed a C++ program applying a 3 × 3 matrix kernel to a 1D vector (representing a 2D float array) using multithreading with OpenMP, achieving 70% efficiency on 64 processors in an HPC environment.
              </li>
              <div className="h-[1px] border my-4 w-full"></div>
              <li className="mt-2">
                <b>Visualization of WHO. data </b> - Visualizes 618 datasets
                from WHO API in line-charts dynamically, built in latest NextJS
                13 framework.
              </li>
            </ul>
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
