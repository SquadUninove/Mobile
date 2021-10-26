import axios from "axios";

const api = axios.create({
  baseURL: "https://salty-gorge-92638.herokuapp.com/",
});

api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});

export default api;
