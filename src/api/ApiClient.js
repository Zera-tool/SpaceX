import axios from "axios"

async function fetchData (request) {
return await axios.get("https://api.spacexdata.com/v4/" + request)
      .then((response) => response.data)}

export default fetchData