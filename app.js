const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static("assets"));

app.get("/login", (req, res) => {
  res.render("login", {
    layout: "layouts/main-layout",
    title: "Login",
  });
});

app.get("/", (req, res) => {
  res.render("home", {
    layout: "layouts/main-layout",
    title: "MasterMind",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "About",
  });
});

app.get("/promo", (req, res) => {
  res.render("form", {
    layout: "layouts/main-layout",
    title: "Promo",
  });
});

app.get("/courses", (req, res) => {
  res.render("course", {
    layout: "layouts/main-layout",
    title: "Card Courses",
  });
});

app.get("/coursedetail", (req, res) => {
  res.render("course-detail", {
    layout: "layouts/main-layout",
    title: "Digital Marketing",
  });
});

app.get("/coursedetail1", (req, res) => {
  res.render("course-detail1", {
    layout: "layouts/main-layout",
    title: "Software Engineer",
  });
});

app.get("/coursedetail2", (req, res) => {
  res.render("course-detail2", {
    layout: "layouts/main-layout",
    title: "UI UX Designer",
  });
});

app.get("/coursedetail3", (req, res) => {
  res.render("course-detail3", {
    layout: "layouts/main-layout",
    title: "Data Science",
  });
});

app.get("/coursedetail4", (req, res) => {
  res.render("course-detail4", {
    layout: "layouts/main-layout",
    title: "AI",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact",
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1> 404 </h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
