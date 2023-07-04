const express = require('express');
const router = express.Router();
const Post = require ("../models/postModel");

router.route("/create").post((req,res) => {
  const title = req.body.title;
  const description = req.body.description;
  const newPost = new Post({
    title,
    description
  })
  newPost.save();
})

router.route("/allposts").get((req,res)=>{
    Post.find()
    .then(foundPosts => res.json(foundPosts))
})

router.route("/allposts/:id").delete((req,res)=>{
    Post.findByIdAndDelete({_id: req.params.id})
    .then(doc => console.log(doc))
    .catch((err) => console.log(err) )
})

router.route("/allposts/:id").put ((req, res) => {
   Post.findByIdAndUpdate({_id: req.params.id}, {
    title: req.body.title,
    description: req.body.description

   })
   .then(doc => console.log(doc))
    .catch((err) => console.log(err) )
})

module.exports = router;