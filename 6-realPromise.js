const axios = require('axios');
const url = 'https://api.kanye.rest/';

const promise = axios.get(url);
promise
  .then(result => {
    console.log(result.data.quote);
  });

const promise1 = axios.get(url);
const promise2 = axios.get(url);
const promise3 = axios.get(url);

// Here we chain the promises, but they all excecute at once. Why?
promise1.then(res => {
  console.log(res.data.quote);
  return promise2;
})
  .then(res => {
    console.log(res.data.quote);
    return promise3;
  })
  .then(res => console.log(res.data.quote));


// This works as expected
promise1.then(res => {
  console.log(res.data.quote);
  return axios.get(url);
})
  .then(res => {
    console.log(res.data.quote);
    return axios.get(url);
  })
  .then(res => console.log(res.data.quote));