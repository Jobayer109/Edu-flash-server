const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());
const courses = require("./data/courses");
const categories = require("./data/category.json");

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const perCourse = courses.find((course) => course.id === id);
  res.send(perCourse);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const courseCategory = categories.filter((category) => category._id === id);
  res.send(courseCategory);
});

app.get("/", (req, res) => {
  res.send("Trust me, Server is running");
});
app.listen(port, () => {
  console.log(`Project app is running on port ${port}`);
});
