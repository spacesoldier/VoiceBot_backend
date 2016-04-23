// curl -k https://localhost:8000/
const http = require('http');
const fs = require('fs');
const urllib = require('url');

const options = {
  //key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  //cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

/*
{
  href: '/status?name=ryan',
  search: '?name=ryan',
  query: 'name=ryan',
  pathname: '/status'
}
*/


http.createServer((req, res) => {
	var data = "";
	req.on("data",chunk=>{data+=chunk});
	req.on("end",()=>{
		var currentURL = urllib.parse(req.url);
		switch (currentURL.pathname){
			case "/upload_images": fs.writeFileSync("123445",data); break;
		}
		res.writeHead(200);
		res.end('\n');
	});
}).listen(8000);