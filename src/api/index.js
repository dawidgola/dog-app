import axios from 'axios';
import { getObjectKeys } from 'helpers/index';

export const getAllBreeds = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');

    return getObjectKeys(response.data.message);
  } catch (error) {
    console.log(error);
  }
};

export const getBreedImage = async (breed) => {
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);

    return response.data.message;
  } catch (error) {
    console.log(error);
  }
};
