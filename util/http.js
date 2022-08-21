import Axios from 'axios';
const baseUrl = 'https://api.nasa.gov/planetary/apod';

export async function fetchPictures(){
    const response  = Axios.get(`${baseUrl}?api_key=adOzt6akkYI92VyVsinD3j4209WsyLAG46HzKdeB&start_date=2022-08-15`)
    .catch((error) => console.error(error))
    return response
}