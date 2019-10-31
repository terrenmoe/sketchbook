const http = require('http');
const path = require('path');
const fs = require('fs');
const { resolveApp } = require('./resolveApp');
const

function handleRequest(req, res) {
  // What did we request?
  let pathname = `.${req.url}`;
  console.log(pathname); /* ./whateverIsAfterPort/ */

  // What's our file extension, dirname, basename, name
  const { ext, dir, base, name } = path.parse(pathname);
  console.log(ext, dir, base, name);

  // If blank let's ask for index.html
  if (dir === '.') {
    pathname = `${path.resolve(dir)}/index.html`;
  }
  if (!(dir === '.') && ext === '') {
    pathname = `${dir}/index.html`;
  }
  console.log(pathname);

  // Map file extension to mime type
  const typeMap = new Map([
    ['.html', 'text/html'],
    ['.js', 'text/javascript'],
    ['.css', 'text/css'],
    ['.json', 'application/json'],
  ]);

  // type is plain txt unless typeMap has ext
  const type = typeMap.has(ext) ? typeMap.get(ext) : 'text/plain';
  console.log(resolveApp(pathname));
  // Now read and write back the file with the appropriate content type
  fs.readFile(
    resolveApp(pathname),
    (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': typeMap.get('.html') });
        return res.end(`
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,
      initial-scale=1"
    />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="files"
    />
    <title>index</title>
  </head>
  <body>
    <h3>
      Error loading ${base}
    </h3>
  </body>
</html>
        `); /* end of templit */
      }
      // Dynamically setting content type
      res.writeHead(200, { 'Content-Type': type });
      return res.end(data);
    },
  );
}

const server = http.createServer(handleRequest);
server.listen(8080);

//
// let io = require('socket.io').listen(server);
// // Register a callback function to run when we have an individual connection
// // This is run for each individual user that connects
// io.sockets.on('connection',
//   function (socket) {
//     console.log("We have a new client: " + socket.id);
//     socket.on('disconnect', function() {
//       console.log("Client has disconnected");
//     });
//     socket.on('mouse',
//       function(data) {
//         // Data comes in as whatever was sent, including objects
//         console.log("Received: 'mouse' " + data.x + " " + data.y);
//         // Send it to all other clients
//         socket.broadcast.emit('mouse', data);
//       }
//     );
//   }
// ); // We are given a websocket object in our function
