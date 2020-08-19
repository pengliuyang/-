import axios from 'axios';
axios.defaults.baseURL='https://192.168.31.179:8081';

export function carousel(parms){
    return axios.get('/carouse/carouse/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function titlelink(parms){
    return axios.get('/headline/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function getallPage(){
    return axios.get('/homepage/getAllPage'
    ).then(res=>{
        return res.data.data
    });
}
export function columnlink(parms){
    return axios.get('/column/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function columnlinkcontent(parms){
    return axios.get('/column/column/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function linkclassify(parms){
    return axios.get('/classify/classifies/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function _queryStock( params ){
    return axios.get('/column/column/7', {
        params
    }).then(res=>{
        return res.data.data
    });
}
export function teacheritems( params ){
    return axios.get('/article/articles/'+params
     ).then(res=>{
        return res.data.data
    });
}