import axios from "axios";

// test api deployed on render
// const apiEndpoint = "https://test-node-express-api.onrender.com";
// used for local testing, figure out how to parameterize for release build
// const apiEndpoint = "http://192.168.68.124:8080";
const apiEndpoint = "https://test-openai-api-htbc.onrender.com";

export const openaiApi = axios.create({
  baseURL: apiEndpoint,
  headers: {
    accept: "application/json",
  },
});
