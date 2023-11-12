import axios from 'axios';

const API_KEY = '39742414-f9e02f0b1fec26f910bcd5038';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchRequest = async (query, page) => {
  const responce = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&per_page=12&page=${page}`
  );
  return responce.data;
};
