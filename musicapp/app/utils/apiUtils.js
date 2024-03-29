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
    handleDeezerError(error.code);
    handleUnsplashError(error.code);
  }
};

export const handleDeezerError = (errorCode) => {
  let errorMessage = "";
  switch (errorCode) {
    case 4:
      errorMessage = "The track could not be found";
      break;
    case 200:
      errorMessage = "Invalid API request";
      break;
    default:
      errorMessage = "Your song had no results";
  }
  console.log(errorMessage);
};

// Function to handle errors for the Unsplash API
export const handleUnsplashError = (errorCode) => {
  let errorMessage = "";
  switch (errorCode) {
    case 4:
      errorMessage = "The track could not be found";
      break;
    case 200:
      errorMessage = "Invalid API request";
      break;
    // Add more cases as needed based on the error codes provided by the Deezer API documentation
    default:
      errorMessage = "An error occurred while fetching data from Deezer";
  }
  // Throw the error to be caught and handled by the caller
  console.log(errorMessage);
};
