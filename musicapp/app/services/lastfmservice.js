import dotenv from "dotenv";

dotenv.config();

export const searchMusic = async (query) => {
  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${process.env.LASTFM_API_KEY}&format=json`
    );
    const data = await response.json();
    return data.results.trackmatches.track[0].url; // Adjust based on the Last.fm API response structure
  } catch (error) {
    console.error("Error fetching music:", error);
    throw error;
  }
};
