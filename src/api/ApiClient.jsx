import axios from "axios";

const fetchData = async (request) => {
  return await axios
    .get(`https://api.spacexdata.com/v4/${request}`)
    .then((response) => response.data);
};

export default fetchData;
