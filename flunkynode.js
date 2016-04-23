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


http.createServer(function(req, res) {
	var data = "";
	req.setEncoding('binary');
	req.on("data",function(chunk){data+=chunk});
	req.on("end",function(){
		var currentURL = urllib.parse(req.url);
		switch (currentURL.pathname){
			case "/post_images":
				fs.writeFileSync("./123445",data);
				data.split("----").map(a=>a.split(/[\n\r]{4}/gi)[1]).filter(a=>!!a).forEach((a,i)=>{fs.writeFileSync("img"+i+".png",a,{encoding:'binary'})});
				break;
		}
		res.writeHead(200);
		res.end('\n');
	});
}).listen(8000);