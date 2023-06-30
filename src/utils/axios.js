import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobs-api-npl-ea33453b0dda.herokuapp.com/api/v1",
});

export default customFetch;


