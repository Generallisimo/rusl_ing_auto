import axios from "axios";
import Cookies from "js-cookie";


export async function getPrice(){
    try{
        const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/price')
        return response.data;
    }catch(error){
        console.error(error);
        throw new Error('FSC no API for get price')
    }

}

export async function updatePrice(newPrice){
    try{
        const response = await axios.post(
            process.env.NEXT_PUBLIC_BACKEND_URL + '/api/price', 
            {
                price: newPrice,
            }
        )
        return response.data;
    }catch(error){
        console.error(error);
        throw new Error('FSC you are can`t update price');
    }
}