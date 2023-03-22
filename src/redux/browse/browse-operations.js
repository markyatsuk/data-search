import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

axios.defaults.baseURL = "";
const API_KEY = "your_api_key";

const getUserData = createAsyncThunk("linkedin/fetchUser", async (url) => {
  try {
    const response = await axios.get(
      `https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "cache-control": "no-cache",
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

const usersOperations = {
  getUserData,
};

export default usersOperations;
