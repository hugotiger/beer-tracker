import axios from "axios";

const instance = axios.create({
  timeout: 5000,
});

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
    const response = await instance.get("/api/beers");
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// GET
// Fetches beers from past 30 days
export const getBeersFromPast30Days = async () => {
  try {
    const response = await instance.get("/api/beers?ageLimit=30");
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// POST
// Adds new beers
export const postBeers = async (beers) => {
  try {
    const response = await instance.post("/api/beers", beers);
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// DELETE
// Deletes beers with the given id
export const deleteBeers = async (id) => {
  try {
    const response = await instance.delete(`/api/beers/${id}`);
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};
