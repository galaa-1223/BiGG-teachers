import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/";

const getStatistics = () => {
    return axios
        .get(API_URL + "statistics")
        .then((response) => {
            return response.data;
        });
};

export default {
    getStatistics
};

// import axios from "axios";
// // import authHeader from "./auth-header";

// const API_URL = "http://localhost:8000/api/v1/";

// // class statisticAPI {

//     const login = (code, password) => {
//         return axios
//             .post(API_URL + "teacher-login", {
//                 code: code,
//                 password: password
//             })
//             .then((response) => {
    
//                 // if (response.data.accessToken) { // daraa hiih
//                     localStorage.setItem("teacher", JSON.stringify(response.data));
//                 // }
    
//                 return response.data;
//             });
//     };

    // static  getStatistics() {
    //     return axios.get(API_URL + 'statistics').then(response=>response.data);
    // }
    // static  getAllProducts() {
    //     return axios.get(API_URL + 'products?_sort=id&_order=asc').then(response=>response.data);
    // }

    // static addProduct(product) {
    //     return axios.post(API_URL + 'products',product).then(response=>response.data);
    // }
    
    // static updateProduct(product){
    //     return axios.patch(API_URL + 'products/'+product.id,product)
    //     .then(response=>response.data);
    // }

    // static deleteProduct(id){
    //     return axios.delete(API_URL + `products/${id}`).then(response=>response.data);
    // }

    // static getAllUsers(){
    //     return axios.get(API_URL + 'users').then(response=>response.data);
    // }

    // static addUser(user) {
    //     return axios.post(API_URL + 'users',user).then(response=>response.data);
    // }
// }

// export default statisticAPI;