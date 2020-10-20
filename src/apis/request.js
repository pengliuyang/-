import axios from 'axios';
axios.defaults.baseURL='http://liuwanr.cn:8080/msdw';
// axios.defaults.baseURL='http://192.168.31.182:8080';

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
export function allColumn(){
    return axios.get('/column/column'
    ).then(res=>{
        return res.data.data
    });
}
export function getColumnarticle(parms,pangNum){
    return axios.get('/column/column/showArticle/'+parms+'?pangNum='+pangNum,
    ).then(res=>{
        return res.data.data
    });
}
export function getArticlemessage(parms){
    return axios.get('/article/articles/'+parms,
    ).then(res=>{
        return res.data.data
    });
}
export function returnColumn(parms){
    return axios.get('/column/'+parms,
    ).then(res=>{
        return res.data.data
    });
}
export function getColumnchildren(parms){
    return axios.get('/column/children/'+parms,
    ).then(res=>{
        return res.data.data
    });
}
export function getHomecolumn(){
    return axios.get('/homepage/getAllPage'
    ).then(res=>{
        return res.data.data
    });
}
export function getHomebanner(parms){
    return axios.get('/img/images/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function postHomebanner(parms){
    return axios.post('/img/images',parms
    ).then(res=>{
        return res.data.data
    });
}
export function getHomecarouse(parms){
    return axios.get('/carouse/carouse/'+parms
    ).then(res=>{
        return res.data.data
    });
}

export function getHomeheadline(parms){
    return axios.get('/headline/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function getHomelinks(parms){
    return axios.get('/link/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function getHomeclassify(){
    return axios.get('/classify/classifies'
    ).then(res=>{
        return res.data.data
    });
}

export function getHomefriendlink(){
    return axios.get('/friendshipLink/getAll'
    ).then(res=>{
        return res.data.data
    });
}
export function getHomelink(){
    return axios.get('/friendshipLink/friendshipLinkGet/all'
    ).then(res=>{
        return res.data.data
    });
}