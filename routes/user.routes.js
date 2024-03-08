const Router = require('express')
const router = Router()

const { registerUser, loginUser, updateavatar, userInfo, userProfile, userFollowUnfollow, editProfile } = require('../controller/user.controller')
const { verifyJWT } = require('../middleware/auth.middleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/updateavatar/:userId', updateavatar)
router.get('/userinfo', verifyJWT, userInfo)
router.get('/userprofile/:userID', verifyJWT, userProfile)
router.put('/userfollowunfollow/:followUserID', verifyJWT, userFollowUnfollow)
router.put('/editprofile', verifyJWT, editProfile)



module.exports = router;