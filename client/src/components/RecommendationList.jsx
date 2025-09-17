// client/src/components/RecommendationList.jsx
import React from "react";
import TrackCard from "./TrackCard";

function RecommendationList({ tracks }) {
  if (!tracks || tracks.length === 0) {
    return <p className="text-gray-500 text-sm">No recommendations yet</p>;
  }

  return (
    <div className="space-y-3">
      {tracks.slice(0, 5).map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  );
}

export default RecommendationList;
