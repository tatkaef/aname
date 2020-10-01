const server = require("./api/server");

//1: make the port dynamic
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("\n*** Server Running on http://localhost:5000 ***\n");
});
