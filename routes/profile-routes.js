const router = require('express').Router();
const { BlogPost } = require('../models/');
const { requireAuth } = require("../utils/login");

router.get("/",  async (req, res) => {   
 
    try {
      const userPostsData = await BlogPost.findAll({
        where: {
          user_id: req.session.id,
        },
      });

      const userPosts = userPostsData.map((post) => post.get({plain: true}))
  
      res.render("profile", { userPosts });
    } catch (error) {
      console.error(" Error displaying login page: ", error);
      console.log("Session data:", req.session);
    }
  });

  module.exports = router;