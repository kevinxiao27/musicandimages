import { searchMusic } from "../services/lastfmservice";
import { searchImages } from "../services/unsplashservice";

// Function to search music and images based on a query
export const searchQuery = async (query) => {
  try {
    // Call Last.fm service to search music
    const musicUrl = await searchMusic(query);
    const imageUrls = await searchImages(query);
    return [musicUrl, imageUrls];
  } catch (error) {
    handleLastfmError(error.code);
    handleUnsplashError(error.code);
  }
};

// Function to handle errors for the Last.fm API
export const handleLastfmError = (errorCode) => {
  let errorMessage = "";
  switch (errorCode) {
    case 6:
      errorMessage = "The artist could not be found";
      break;
    case 7:
      errorMessage = "The track could not be found";
      break;
    default:
      errorMessage = "An error occurred while fetching music";
  }
  throw new Error(errorMessage);
};

// Function to handle errors for the Unsplash API
export const handleUnsplashError = (errorMessage) => {
  console.error("An error occurred while fetching images:", errorMessage);
  throw new Error(errorMessage);
};
