const router = require('express').Router();
const {BlogComment} = require('../../models/')


router.post('/', async (req,res)=>{
    try {
        const blog_id = req.body
        const user_id = req.session.id
       const postData = await BlogComment.create({
        ...blog_id,
        ...user_id  
       })
       console.log(postData)
       return res.json(postData) 
    } catch (hands) {
        console.error(hands)
        res.status(500).json(hands)
        
    }
});


module.exports = router