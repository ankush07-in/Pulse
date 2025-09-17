// client/src/App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Player from "./components/Player";
import RecommendationList from "./components/RecommendationList";

function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tracks")
      .then((res) => {
        setTracks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tracks:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="p-6 text-center border-b border-gray-700">
        <h1 className="text-4xl font-extrabold tracking-wide text-pink-400 drop-shadow-md">
          Pulse 🎵
        </h1>
        <p className="text-gray-400">Your personalized music player</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row flex-1">
        {/* Recommendations Sidebar */}
        <aside className="w-full lg:w-1/4 bg-gray-800 p-4 border-r border-gray-700">
          <h2 className="text-lg font-semibold mb-3">Recommended</h2>
          {loading ? (
            <p className="text-gray-500 text-sm">Loading...</p>
          ) : (
            <RecommendationList tracks={tracks} />
          )}
        </aside>

        {/* Player Section */}
        <section className="flex-1 flex flex-col items-center justify-center p-6">
          {loading ? (
            <p className="text-gray-500">Loading tracks...</p>
          ) : (
            <Player tracks={tracks} />
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 text-sm border-t border-gray-700">
        Made with ❤️ by Pulse
      </footer>
    </div>
  );
}

export default App;
