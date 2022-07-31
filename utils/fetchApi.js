import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '2a485bd798msha7ed22e2f267524p112bd6jsnea8b8418d035',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}