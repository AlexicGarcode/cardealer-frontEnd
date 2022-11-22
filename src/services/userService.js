import axios from "axios";

const URL = `${process.env.REACT_APP_API_URL}/users`;

const configHeader = {
  headers: {
    "x-token": localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE),
  },
};

export const verifyingTokenService = async () => {
  const response = await axios.get(URL, configHeader);

  return response.data;
};
