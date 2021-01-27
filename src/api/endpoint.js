import axios from "axios";

// rick&morthy
const API_URL = "https://rickandmortyapi.com/api";
const numberLimit = [1, 671];

const randomNumbers = () => {
  const numbers = [];
  const min = numberLimit[0];
  const max = numberLimit[1];
  for (let i = 0; i < 4; i++) {
    const operator = Math.floor(Math.random() * (max - min)) + min;
    numbers.push(operator);
  }
  return numbers;
};

export const getCharacters = async () => {
  return await axios.get(`${API_URL}/character/${randomNumbers().toString()}`);
};

// recipes
export const getCharacter = async (id) => {
  return await axios.get(`${API_URL}/character/${id}`);
};
