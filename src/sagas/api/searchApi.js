import axios from "axios";

const BING_API_KEY = process.env.REACT_APP_BING_API_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;

const defaultConfigs = {
  bing: {
    getUrl: (query) => {
      return `/search?q=${query}`;
    },
    baseURL: "https://api.bing.microsoft.com/v7.0",
    headers: {
      "Ocp-Apim-Subscription-Key": BING_API_KEY,
    },
  },
  google: {
    getUrl: (query) => {
      return `https://www.googleapis.com/customsearch/v1?&key=${GOOGLE_API_KEY}&cx=${GOOGLE_ID}&q=${query}`;
    },
  },
};

export const onSearchApi = ({ provider, query }) => {
  if (provider === "both") return;

  const { getUrl, ...providerConfig } = defaultConfigs[provider];
  return axios.get(getUrl(query), providerConfig);
};
