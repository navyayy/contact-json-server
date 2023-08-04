const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors());
// // Add this before server.use(router)
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//     "/blog/:resource/:id/show": "/:resource/:id",
//   })
// );
server.use(router);
server.listen(3006, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
