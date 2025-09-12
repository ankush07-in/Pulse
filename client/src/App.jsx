// client/src/App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Player from "./components/Player";

function App() {
  const [tracks, setTracks] = useState([]);

  // Fetch tracks from backend (Express API)
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tracks")
      .then((res) => setTracks(res.data))
      .catch((err) => console.error("Error fetching tracks:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Pulse 🎵</h1>
      <p>Your personalized music player</p>

      {tracks.length > 0 ? (
        <Player tracks={tracks} />
      ) : (
        <p className="text-gray-400">Loading tracks...</p>
      )}
    </div>
  );
}

export default App;
