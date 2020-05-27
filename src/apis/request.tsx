import axios from "axios";

const baseUrl = "https://101.200.216.231:8080";
// const baseUrl = "https://localhost:8080"


const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 20000,
});

const request = (
    url: string,
    params: any,
    method='get',
    // ...rest
) => {
    return axiosInstance({
        url, params
    })
        // .then((response) => {
        //     console.log(response.data);
        // })
        // .catch((error) => {
        //     return "fail";
        // });
};

export default request;
