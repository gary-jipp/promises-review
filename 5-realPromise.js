const axios = require('axios');

const promise = axios.get('https://api.kanye.rest/');
promise
  .then(result => {
    console.log(result.data.quote);
  });

const promise1 = axios.get('https://api.kanye.rest/');
const promise2 = axios.get('https://api.kanye.rest/');
const promise3 = axios.get('https://api.kanye.rest/');

promise1.then(res => { console.log(res.data.quote); return promise2; })
  .then(res => { console.log(res.data.quote); return promise3; })
  .then(res => console.log(res.data.quote));