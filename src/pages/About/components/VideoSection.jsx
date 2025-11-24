import React, { useState } from 'react';
import IconMenu from "../assets/icons/IconMenu.svg";
import IconWeb from "../assets/icons/IconWeb.svg";
import IconTime from "../assets/icons/IconTime.svg"

const DEFAULT_VIDEO_URL = "https://youtu.be/n6B5gQXlB-0";
const DEFAULT_TITLE = "Watch our step on YouTube";

// Video dari URL YouTube
const getYoutubeId = (url) => {
  const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
};

const VideoSection = ({ videoUrl = DEFAULT_VIDEO_URL, title = DEFAULT_TITLE, overlayOpacity = 0.85 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYoutubeId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&fs=1` : null;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

  return (
    <section className=''>
      <div className="relative w-full aspect-video md:h-[500px] flex justify-center items-center">
        {isPlaying && embedUrl ? (
          <iframe
            title="YouTube Video Player"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-contain"
          />
        ) : (
          <div
            className="relative w-full h-full flex flex-col items-center justify-center cursor-pointer bg-[#2C2F24] bg-center bg-cover"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
            onClick={() => setIsPlaying(true)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2C2F24D6]" style={{ opacity: overlayOpacity }} />

            {/* Play Button */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 transition-transform duration-200 hover:scale-110">
              <svg className="text-[#AD343E]" width="18" height="18" viewBox="0 0 11 18" fill="currentColor">
                <path d="M14.072 8.354c.48.277.48 1.085 0 1.362L1.875 16.969c-.48.277-1.085-.07-1.085-.681V1.712c0-.61.605-.958 1.085-.681l12.197 7.323z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="relative z-10 text-xl sm:text-4xl text-center whitespace-pre-line text-white">
              {title}
            </h2>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row p-10 gap-20 md:gap-12 max-w-[1300px] my-4 md:my-0 mx-auto items-stretch justify-center">
        <div className="flex flex-1 items-start gap-3">
          <img src={IconMenu} alt="icon menu" className="w-9 h-auto" />
          <div className="flex flex-col">
            <p className="font-bold text-md mb-3">Food Rescue</p>
            <p className="text-sm m-0">
              Give a second chance to surplus meals and let them reach the right hands.
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-start gap-3">
          <img src={IconWeb} alt="icon web" className="w-9 h-auto" />
          <div className="flex flex-col">
            <p className="font-bold text-md mb-3">Easy To Share</p>
            <p className="text-sm m-0">
              Donate or order with just a few taps: simple, fast, and impactful.
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-start gap-3">
          <img src={IconTime} alt="icon time" className="w-9 h-auto" />
          <div className="flex flex-col">
            <p className="font-bold text-md mb-3">Community Impact</p>
            <p className="text-sm m-0">
              Every portion matters. Track how your contribution helps reduce waste and support people in need.            </p>
          </div>
        </div>
      </div>

    </section>


  );
};

export default VideoSection;
