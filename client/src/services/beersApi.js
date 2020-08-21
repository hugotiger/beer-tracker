import axios from "axios";

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
//   timeout: 5000,
// });

const errorHandler = (err) => {
  let errMsg = "";
  if (err.response) {
    // Client received an error response
    errMsg = "Something went wrong";
  } else if (err.request) {
    // Client never received a response
    console.log(err);
    errMsg = "Failed to fetch";
  } else {
    // Other errors, usually shouldn't go here
    errMsg = "Unexpected error";
  }
  return { error: true, data: errMsg };
};

// GET
// Fetches all beers
export const getAllBeers = async () => {
  try {
    const response = await axios.get("beers");
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// GET
// Fetches beers from past 7 days
export const getBeersFromPastWeek = async () => {
  try {
    const response = await axios.get("beers?ageLimit=7");
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// POST
// Adds new beers
export const postBeers = async (beers) => {
  try {
    const response = await axios.post("beers", beers);
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// DELETE
// Deletes beers with the given id
export const deleteBeers = async (id) => {
  try {
    const response = await axios.delete(`beers/${id}`);
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};
