import dotenv from "dotenv";

dotenv.config();

export const searchTrack = async (query) => {
  try {
    const response = await fetch(`/deezer/search?q=track:${query}`);
    const data = await response.json();

    if (!data.data[0]) {
      onsole.error("No song was found");
      return "No song was found";
    }
    return data.data[0].preview;
  } catch (error) {
    console.error("Error fetching track:", error);
  }
};
