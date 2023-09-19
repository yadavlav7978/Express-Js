{
  /*
!--------------------------------- What is Express.Js -----------------------------------------------------------

1. Express.js is a Node.js Framework.It is most popular framework as of now.
2. Express.js is a web application framework that provides you with a simple API to build , web apps and back ends.
3. Routing: Express makes it easy to define routes for your web application. A route is a path that a user can visit to access a specific resource, such as a web page, image, or API endpoint.

*/
}

//  1. This line of code,imports the Express framework into the current JavaScript file.
const Express = require("express");

// 2. This line of code, creates a new Express application. The Express() function is a function that creates a new Express application object.
//    The app variable will refer to the new Express application object
const app = Express();

//      Once you have created an Express application object, you can use it to define routes, middleware, and other features of your web application.

// 3.  The app.get() method is used to define a route that handles GET requests to a specific URL.
//     Eg: let we have an url : www.Movies.com now i can define a route for /action movies, a route for /drama movies, and a route for /science-fiction movies.

app.get("/", (req, res) => {
  res.status(200).send("Hello from Home Pages");
});

app.get("/about", (req, res) => {
  res.send("<h2>Hello from about page</h2>"); // You can also pass html element
});

app.get("/contact", (req, res) => {
  res.send("Hello from contact page");
});

// 4.  To start the Express application, we can use the app.listen() method. This method will start the application and listen for incoming connections on a specific port.

const port = 8000;
app.listen(port, () => {
  console.log(`Listening Succesfully at port ${port}`);
});

{
  /*
  ! ------------------------------ difference between res.status().send() and res.send() -----------------------------

    On using status(), we are actually checking it's status first than sending some response which is a good practice ,
    and  on using  send() ,we are sending response directly .

    For example, if a user requests a page that does not exist, you should set the status code to 404 (Not Found) before sending the response. 
    This will tell the user that the page does not exist and that they should try a different page.
    If you do not use the status() method to set the HTTP status code, the default status code will be 200 (OK). 
    This means that the user will see a status code of 200 even if the page they requested does not exist. This is incorrect and can be confusing for the user.
*/
}
