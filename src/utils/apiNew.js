import axios from "axios";
const backendURL = "http://localhost:9000";


export const fetchDataFromApi = async (payload) => {
    // const resp = await callOpenAIAPI();
    console.log("hi")
    try {
        const response = await axios.get(`${backendURL}/testAPI`, {
          params: { q: payload.q }
        });
            console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

// fetchDataFromApi("")

