const express = require("express");
const {
  getAllBlogs,
  fetchSingleBlog,
  userSpecificBlogs,
  updateBlog,
  deleteBlog,
  newBlog,
} = require("../controllers/blogController");
const upload = require("../middleware/multer");
const route = express.Router();

route.get("/getAllBlogs", getAllBlogs);
route.delete("/deleteBlog", deleteBlog);
route.get("/userSpecificBlogs", userSpecificBlogs);
route.get("/fetchSingleBlog", fetchSingleBlog);
route.put("/updateBlog", upload.single("blogImage"), updateBlog);
route.post("/newBlog", upload.single("blogImage"), newBlog);
module.exports = route;
