import axios from "axios";

const BASE_URL="https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const FetchDataFromApi = async(url) =>{
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(response.data);
    return response.data; // Return the data directly
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
}


