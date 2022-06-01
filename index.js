const express = require("express");

const app = express();
app.use(express.json());

const courses = [
  {
    name: "course 1",
    id: 1,
  },
  {
    name: "course 2",
    id: 2,
  },
  {
    name: "course 3",
    id: 3,
  },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

// implement this api to retrive back all of the courses
app.get("/api/courses", (req, res) => {});

// implement this api to be able to recive an object containing a course name and add it to
// the courses array

// bonus points - implement this to be able to accept a query param (name) that will only return courses that start with
// that name. i.e: http://localhost:3000/api/courses?name=cou -> return all courses
// http://localhost:3000/api/courses?name=course 3 -> return just course 3
app.post("/api/courses", (req, res) => {});

// implement this api to retrive a course when accepting an id as a route param
app.get("/api/courses/:id", (req, res) => {});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on port ${port} !!.....`));
