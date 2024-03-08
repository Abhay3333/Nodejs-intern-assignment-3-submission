const express = require('express')
const myDb = require('./db/db')
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')
const likeRoutes = require('./routes/like.routes')
const commentRoutes = require('./routes/comments.routes')



const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

myDb.myDb()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     }
// )

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/likes', likeRoutes);
app.use('/api/v1/comments', commentRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)