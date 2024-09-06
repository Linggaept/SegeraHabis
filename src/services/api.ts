import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

//
const fetchData = async(endpoint:string) => {
    try{
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response.data;
    }catch(error){
        console.log(`Error fetching ${endpoint}: `,error);
        throw error;
    }
}

export default fetchData