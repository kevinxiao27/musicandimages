import dotenv from "dotenv";

dotenv.config();

export const searchTrack = async (query) => {
  try {
    const response = await fetch(
      `https://api.deezer.com/search?q=track:${query}`
    );
    const data = await response.json();
    const trackUrl = data.data[0].preview;
    return trackUrl;
  } catch (error) {
    console.error("Error fetching track:", error);
    throw error;
  }
};
