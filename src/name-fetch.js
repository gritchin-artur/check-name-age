import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export async function fetchNameAge(name) {
  const URL = "https://api.agify.io?name=";
    try {
        const response = await axios.get(
            `${URL}${name}`
        );
        return response.data;
  } catch (error) {
    Notify.failure("We're sorry, but you've reached the end of search results.")
    }

};