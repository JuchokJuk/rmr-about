import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Получаем наш хост
const host = process.env.NEXT_PUBLIC_API_URL;

export const mockInstance = new MockAdapter(axios, {
    delayResponse: 250,
    onNoMatch: "passthrough",
});

// На винде оно хост подтягивается через раз.
export const axiosInstance = axios.create({
    baseURL: host || "https://strapi.sheverev.com/",
    timeout: 12000,
    withCredentials: true,
});
