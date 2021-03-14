var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://www.goldapi.io/api/XAU/INR',
  'headers': {
    'x-access-token': 'goldapi-3c7yzrtukm8ypzh6-io',
    'Content-Type': 'application/json'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
