import axios from "axios";

export default async function handler(req, res) {
  try {
    // Replace 'YOUR_API_KEY' with your actual API key from the News API or similar
    const apiKey = process.env.NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    // Fetch news articles from the third-party API
    const response = await axios.get(apiUrl);

    // Check if the response is valid
    if (response.status === 200) {
      res.status(200).json({ articles: response.data.articles });
    } else {
      res.status(response.status).json({ error: "Failed to fetch news articles" });
    }
  } catch (error) {
    // Handle errors gracefully
    res.status(500).json({ error: "An error occurred while fetching news data" });
  }
}
