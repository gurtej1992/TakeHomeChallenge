import Axios from 'axios';
const baseUrl = 'https://api.nasa.gov/planetary/apod';

export async function fetchPictures(startDate,endDate){
    const response  = Axios.get(`${baseUrl}?api_key=adOzt6akkYI92VyVsinD3j4209WsyLAG46HzKdeB&start_date=${startDate}&end_date=${endDate}`)
    .catch((error) => console.error(error))
    return response
}