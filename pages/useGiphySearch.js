const giphyApiToken = process.env.GIPHY_API_TOKEN;

export function useGiphySearch() {
  const getGifs = async (name) => {
    return await fetch(`https://api.giphy.com/v1/gifs/search?q=${name}&api_key=${giphyApiToken}&limit=10`);
  };
  return { getGifs };
};
