import axios from "axios";

const baseUrl = "http://localhost:8080/";

// const shiUrl = baseUrl + 'shi';
// const ciUrl = baseUrl + 'ci';
// const quUrl = baseUrl + 'qu';

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
