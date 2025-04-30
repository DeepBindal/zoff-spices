"use client";

import { PlayCircle } from "lucide-react";
import { useState } from "react";

export default function VideoThumbnail({ imageLink, videoLink }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-md">
      {!isPlaying ? (
        <button
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
            <PlayCircle className="text-white w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform" />
          </div>
        </button>
      ) : (
        <iframe
          src={videoLink}
          title="Zoff Video"
          className="w-full h-full rounded-xl"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

