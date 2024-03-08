const Router = require('express')
const router = Router()

const { likeDislikePost } = require('../controller/like.controller')
const { verifyJWT } = require('../middleware/auth.middleware')

router.post('/likeDislikePost/:postId', verifyJWT, likeDislikePost)



module.exports = router;