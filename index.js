const http = require('http');
const fs = require('fs');
const port = 5000;


function requestHandler(req, res) {
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    fs.readFile('./index.html', function(err, data) {
        if (err) {

            return res.end('<h1>Error !</h1>')
        } else {
            return res.end(data);
        }
    })

}

const server = http.createServer(requestHandler);


server.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server is up and running at port : ", port);
});