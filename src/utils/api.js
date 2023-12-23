import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGYyODVjMmIxZmEzYzQzMDg2M2M2MWU1Njg3ZWQyNCIsInN1YiI6IjY1MmNkMzU5MGNiMzM1MTZmZDRhNzRmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jTyAJ31Tg2zhFg768-4TpCawzVznIscxVvKclmsta9U"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async(url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        })
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}