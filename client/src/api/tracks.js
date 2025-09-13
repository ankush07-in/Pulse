import axios from "axios";

const API_URL = "http://localhost:5000/api/tracks";

export const getTracks = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Backend not available, using dummy data.");
    return [
      { title: "Dreamscape", artist: "Pulse AI", url: "/dummy1.mp3" },
      { title: "Neon Lights", artist: "Pulse AI", url: "/dummy2.mp3" },
    ];
  }
};
