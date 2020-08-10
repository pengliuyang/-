import axios from 'axios';
axios.defaults.baseURL='https://192.168.31.179:8081'

export function queryStock( params ){
    return axios.get('product/goodslists', {
        params
    }).then(res=>{
        return res.data
    });
}