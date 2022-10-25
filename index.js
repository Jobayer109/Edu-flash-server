const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Trust me, Server is running");
});

app.listen(port, () => {
  console.log(`Project app is running on port ${port}`);
});
