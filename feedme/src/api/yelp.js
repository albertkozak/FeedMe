import axios from "axios";
import config from "../config";

const API_KEY = config.YELP_API_KEY;

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer " + API_KEY
  }
});
