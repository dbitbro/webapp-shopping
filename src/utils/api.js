import axios from "axios";
console.log(STRAPI_API_KEY);
const params = {
    headers: {
        Authorization: "bearer" + process.env.STRAPI_API_KEY,
    },

};

export const fetchDataFromApi = async () => {
    
}
