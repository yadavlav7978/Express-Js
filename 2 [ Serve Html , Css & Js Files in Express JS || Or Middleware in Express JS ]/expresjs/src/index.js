const Express = require("express");
const app = Express();
const path = require("path");


console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const staticpath = path.join(__dirname, "../public");

app.use(Express.static(staticpath));

const port = 8000;

app.listen(port, () => {
  console.log("Listen Succesfully");
});

{/*

1. The app.use() method in Express is used to register middleware functions with the application.
2. The Express.static(staticpath) function is a middleware function that serves static files from the specified directory. 
   In this case, the staticpath variable contains the path to the public directory.
3. So, the app.use(Express.static(staticpath)); line tells Express to serve static files from the public

4. To serve static files means to make files available to users over the internet, or display to users.

*/}

{
  /*

 1. The __dirname variable contains the absolute path to the directory where the current JavaScript file is located.
    For example, if the current JavaScript file is located in the following directory:
    C:\Users\dell\OneDrive\Desktop\Nodejs\expresjs\src\index.js

 2. Then the __dirname variable will contain the following value:
    C:\Users\dell\OneDrive\Desktop\Nodejs\expresjs\src

 3. When the path.join() function is called with the __dirname variable and the ../public string, it will return the following path:
    C:\Users\dell\OneDrive\Desktop\Nodejs\expresjs\public

 4.This is the absolute path to the public directory.
 5. The path.join() function is a useful function for combining multiple path segments into a single path.

*/
}
