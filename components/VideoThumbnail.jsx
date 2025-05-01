"use client";

import { PlayCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoThumbnail({ imageLink, videoLink }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-md">
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.button
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsPlaying(true)}
            className="w-full h-full relative group"
            aria-label="Play video"
          >
            <img
              src={imageLink}
              alt="Video thumbnail"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/50">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <PlayCircle className="text-white w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform" />
              </motion.div>
            </div>
          </motion.button>
        ) : (
          <motion.iframe
            key="video"
            src={videoLink}
            title="Zoff Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
