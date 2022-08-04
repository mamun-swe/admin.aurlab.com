
import axios from "axios"

/* Index */
const index = async ({ page, limit }) => {
    const header = {
        headers: {
            api_key: process.env.REACT_APP_API_KEY,
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }

    return await axios.get(`${process.env.REACT_APP_ADMIN_ENDPOINT}admin?page=${page}&limit=${limit}`, header)
}

/* store */
const store = async (data) => {
    const header = {
        headers: {
            api_key: process.env.REACT_APP_API_KEY,
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }

    return await axios.post(`${process.env.REACT_APP_ADMIN_ENDPOINT}admin`, data, header)
}


export const Admin = {
    index,
    store
}