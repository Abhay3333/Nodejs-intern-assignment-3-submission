const Router = require('express')
const router = Router()

const { Addcomment, getCommentsBypostID, deleteComment, updateComment } = require('../controller/comment.controller')
const { verifyJWT } = require('../middleware/auth.middleware')

router.post('/addcomment/:postId', verifyJWT, Addcomment)
router.get('/getcomments/:postId', verifyJWT, getCommentsBypostID)
router.delete('/deletecomment/:commentID', verifyJWT, deleteComment)
router.put('/updatecomment/:commentID', verifyJWT, updateComment)



module.exports = router;