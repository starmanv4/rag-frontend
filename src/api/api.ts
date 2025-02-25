import axios from "axios";

const API_BASE_URL = "http://localhost:8080";


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


export const uploadFile = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiClient.post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.message;
  } catch (error) {
    console.error("File upload error:", error);
    throw new Error("Failed to upload file. Please try again.");
  }
};


export const sendQuery = async (query: string): Promise<string> => {
  try {
    const response = await apiClient.post("/query", { query });

    return response.data.response;
  } catch (error) {
    console.error("Query error:", error);
    throw new Error("Failed to process query. Please try again.");
  }
};
