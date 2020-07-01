const axios = require('axios');

const url = 'https://api.kanye.rest/';


// Be careful doing this. Don't want to create too many
const promises = [];
for (let i = 0; i < 10; i++) {
  promises[i] = axios.get(url);
}

Promise.all(promises)
  .then(result => {
    result.forEach(element => {
      console.log(element.data.quote);
    });
  });