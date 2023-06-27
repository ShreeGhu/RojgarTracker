import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export default customFetch;

//https://jobify-prod.herokuapp.com/api/v1/toolkit
//https://jobs-api-npl-ea33453b0dda.herokuapp.com/api/v1
