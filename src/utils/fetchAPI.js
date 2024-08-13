//search api
const searchAPI = async (query) => {
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a5366c16e1msh7d94ed47fa92ddcp100999jsn6c7331feeb02",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

//suggested videos api
const suggestedVidsAPI = async (videoId) => {
  const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a5366c16e1msh7d94ed47fa92ddcp100999jsn6c7331feeb02",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
};

//video details api
const videoDetailsAPI = async (videoId) => {
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a5366c16e1msh7d94ed47fa92ddcp100999jsn6c7331feeb02",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { searchAPI, suggestedVidsAPI, videoDetailsAPI };
