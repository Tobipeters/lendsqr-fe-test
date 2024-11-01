import axios, { isAxiosError } from "axios";
import { IUser } from "../types/model";
const env = import.meta.env;

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get(`${env.VITE_API_BASE_URL}/data`, {
      headers: {
        Authorization: `Bearer ${env.VITE_API_ACCESS_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message || "Error fetching users");
    } else {
      throw new Error("Error fetching users");
    }
  }
};
