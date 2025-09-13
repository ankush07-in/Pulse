import { useState } from "react";

function Player({ tracks }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = tracks[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{currentTrack?.title}</h2>
      <p className="text-gray-400">{currentTrack?.artist}</p>
      <audio controls autoPlay className="w-full mt-4" src={currentTrack?.url}>
        Your browser does not support audio.
      </audio>

      <div className="flex justify-between mt-4">
        <button onClick={handlePrev} className="px-4 py-2 bg-gray-700 rounded">
          ⏮ Prev
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-gray-700 rounded">
          Next ⏭
        </button>
      </div>
    </div>
  );
}

export default Player;
