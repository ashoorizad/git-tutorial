import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/Contactus/Contact";
import About from "./pages/aboutus/About";
import NotFound from "./pages/notfound/NotFound";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import Comments from "./pages/comments/Comments";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userName" element={<Posts />} />
      <Route path="/users/:userName/:postId" element={<Comments />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
