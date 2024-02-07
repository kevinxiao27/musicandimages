import { searchTrack } from "../services/deezerservice";
import { searchImages } from "../services/unsplashservice";

// Function to search music and images based on a query
export const searchQuery = async (query) => {
  try {
    // Call Last.fm service to search music
    const musicUrl = await searchTrack(query);
    const imageUrls = await searchImages(query);
    return [musicUrl, imageUrls];
  } catch (error) {
    handleUnsplashError(error.code);
  }
};

// Function to handle errors for the Unsplash API
export const handleUnsplashError = (errorMessage) => {
  console.error("An error occurred while fetching images:", errorMessage);
  throw new Error(errorMessage);
};
