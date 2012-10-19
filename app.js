var exec = require('child_process').exec;
var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new(static.Server)('./public');

exec("git clone git://github.com/dannysu/dannysu.github.com.git public", function(error, stdout, stderr) {
    require('http').createServer(function (request, response) {
        request.addListener('end', function () {
            //
            // Serve files!
            //
            file.serve(request, response);
        });
    }).listen(process.env.VMC_APP_PORT || 8000, null);
});
