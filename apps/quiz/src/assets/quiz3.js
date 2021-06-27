var args = process.argv.slice(2);

if (args.length > 0) {
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
      args.forEach((arg) => {
        const tableStr = bodyStr.substring(
          bodyStr.indexOf('<table>'),
          bodyStr.lastIndexOf('</table>')
        );
        let trStartIndex = 0;
        let trEndIndex = 0;
        let navList = [];
        while (true) {
          trStartIndex = tableStr.indexOf('<tr>', trStartIndex);
          trEndIndex = tableStr.indexOf('</tr>', trStartIndex);
          if (trStartIndex < 0 || trEndIndex < 0) {
            break;
          }
          let trStr = tableStr.substring(trStartIndex + 4, trEndIndex); // 4 from <td> length
          trStartIndex++;

          // find fundName, nav
          trStr = trStr.replace(/(<([^>]+)>)/g, ':');
          trStr = trStr.replace(/::/g, ',');
          trStr = trStr.replace(/:/g, '');
          const tdSplit = trStr.split(',');
          navList.push({ fundName: tdSplit[0].trim(), nav: tdSplit[1].trim() });
        }
        navList = navList.slice(1); // slice th from list
        const navNum = navList.find((nav) => nav.fundName == arg)?.nav;
        if (navNum) {
          process.stdout.write(navNum + ' ');
        } else {
          process.stdout.write('Not found nav ');
        }
      });
    });
  });

  req.on('error', (error) => {
    process.stdout.error(error);
  });
  req.end();
} else {
  process.stdout.write('Not found arguments to find nav');
}
