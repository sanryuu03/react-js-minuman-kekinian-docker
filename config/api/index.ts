import axios, { AxiosRequestConfig } from "axios"

export default async function callAPI({url, method, data}: AxiosRequestConfig) {

    const response = await axios({
        url: url,
        method: method,
        data: data,
    }).catch((err) => err.response)

    const axiosResponse = response.data.umpanBalik

    return axiosResponse
}
