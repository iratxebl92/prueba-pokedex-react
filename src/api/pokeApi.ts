import axios from "axios";
import { BASE_URL } from "../utils/constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllPokemons = async () => {
  try {
    const response = await axiosInstance.get("pokemon?limit=20&offset=0");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPokemon = async (id:number) => {
    try {
        const response = await axiosInstance.get(`pokemon/${id}`)
        return response.data;
    } catch (error) {
            console.error(error);
    return null;
    }
}