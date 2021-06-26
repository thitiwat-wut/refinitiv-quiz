var args = process.argv.slice(2);
const arg = args[0];

const url = 'codequiz.azurewebsites.net';

const https = require('https');
const options = {
  hostname: url,
  path: '/',
  method: 'GET',
  headers: { Cookie: 'hasCookie=true' },
};
const req = https.request(options, (response) => {
  // reference https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
  let body = [];
  response.on('data', (data) => {
    body.push(data);
  });
  response.on('end', () => {
    body = Buffer.concat(body).toString();
    const bodyStr = body.toString();
    const indexArgToFind = bodyStr.indexOf(arg) + arg.length + 5; // 5 from </td> length
    const start = bodyStr.indexOf('<td>', indexArgToFind);
    const end = bodyStr.indexOf('</td>', indexArgToFind);
    const findNav = bodyStr.substring(start + 4, end); // 4 from <td> length
    process.stdout.write(findNav);
  });
});

req.on('error', (error) => {
  process.stdout.error(error);
});

req.end();
