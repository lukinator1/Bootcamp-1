var http = require('http'), 
    fs = require('fs'), 
    url = require('url');
    port = 8080;
/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var pathname = url.parse(request.url).pathname;
  if( pathname == '/listings' ){
        response.end(listingData);
  }
  else{
    response.writeHead(404);
    response.end('Bad gateway error');
  }
  }
 /* if (parsedURL == '/listings'){
    response.WriteHead(200,{'Content-Type': 'application/json'})
    response.write(listingData, 'utf8', readFile());
    response.end();
  }
  else {
    response.WriteHead(404);
    response.end('Bad gateway error - path')
  }*/
 /*response.WriteHead(200,{'Content-Type': 'application/json'});*/
   /*
    Your request handler should send listingData in the JSON format as a response if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: Explore the request object and its properties 
    HINT: Explore the response object and its properties
    https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
    
    HINT: Explore how callback's work 
    http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4
    
    HINT: Explore the list of MIME Types
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
   */

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    HINT: Read up on JSON parsing Node.js
   */
  if (err) throw err;
  listingData = data;
  var server = http.createServer(requestHandler);
  server.listen(port, function() {
    console.log('server listening on: http://localhost:' + port);
  });
    //Check for errors
   //Save the sate in the listingData variable already defined
  //Creates the server
  //Start the server
});
