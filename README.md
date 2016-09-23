# Code_challenge
 CallidusCloud UI Challenge

To run the application locally. Follow the bellow steps.

1. Install nodeJs
    http://nodejs.org/
2. Install gruntjs
       http://gruntjs.com/ OR
       npm install -g grunt-cli (use 'sudo' command for mac)
3. Install the dependencies
       if your root is the project directory,
       npm install
specify a port in gruntfile.js or it will run on the given default port (http://localhost:9002)
then run the command 'grunt' to up the server. That's it.

        OR

Deploy the 'dist' folder in any web server (make sure the root is the dist folder) and access it through a url path.
