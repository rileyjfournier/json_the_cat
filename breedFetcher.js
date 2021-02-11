const request = require('request');
const args = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:',typeof body);
  const data = JSON.parse(body);
  if (data[0] !== undefined) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found, please try again.');
  }
});