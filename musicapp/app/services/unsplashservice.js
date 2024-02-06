import dotenv from "dotenv";

dotenv.config();

export const searchImages = async (query) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.UNSPLASH_API_KEY}`
    );
    const data = await response.json();
    const imageUrls = data.results
      .slice(0, 7)
      .map((image) => image.urls.regular); // Adjust based on the Unsplash API response structure
    return imageUrls;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
