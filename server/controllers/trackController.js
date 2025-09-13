import Track from "../models/Track.js";

export const getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const addTrack = async (req, res) => {
  try {
    const { title, artist, url } = req.body;
    const track = new Track({ title, artist, url });
    await track.save();
    res.status(201).json(track);
  } catch (err) {
    res.status(500).json({ error: "Failed to add track" });
  }
};
