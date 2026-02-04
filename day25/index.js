//fetch api and syntax

fetch(URL, options)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))

//using async/await with fetch()
async function fetchData(){
try{
const response=await fetch(URL,options);
const data=await response.json();
console.log(data);}
catch(error){
    console.error(error);
}
}
fetchData('http://localhost:3000/posts');

//fetch post
async function fetchPosts(){
    const Api_url="http://localhost:3000/posts";
    try{
       const response =await fetch(Api_url);
       const data=await response.json();
       console.log(data);
    }catch(error){console.log(error)}
}
//fetch usage: query params

async function fetchPostsWithComments(){
    const Api_URL="http://localhost:3000/posts";
    const queryParams={
        _embed: "comments",
    }

    try{
        const queryString=new URLSearchParams(queryParams).toString();
        console.log(queryString);
    }
    catch(error){
        console.log(error);
    }
}