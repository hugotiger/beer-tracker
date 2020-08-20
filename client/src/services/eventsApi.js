import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
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
// Fetches all events
export const getAllEvents = async () => {
  try {
    const response = await instance.get("events");
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// GET
// Fetches events from past 7 days
export const getEventsFromPastWeek = async () => {
  try {
    const response = await instance.get("events?ageLimit=7");
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// POST
// Adds one new event
export const postEvent = async (event) => {
  try {
    const response = await instance.post("events", event);
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};

// DELETE
// Deletes one event with the given id
export const deleteEvent = async (id) => {
  try {
    const response = await instance.delete(`events/${id}`);
    return { error: false, data: response.data };
  } catch (err) {
    return errorHandler(err);
  }
};
