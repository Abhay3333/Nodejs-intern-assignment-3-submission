
#  Social Networking API with MongoDB

## Overview

This project is a Social Networking API built using Node.js, Express.js, and MongoDB. It provides a robust backend for a social networking platform, allowing users to create accounts, connect with friends, post updates, and interact with other users by commenting on their post.

## Features

1. **User Management:**
   - Register a new user account.
   - Authenticate users with JWT (JSON Web Tokens).
   - Update user profiles.

2. **Friendship:**
   - Send friend requests.
   - Accept or decline friend requests.
   - View friends list.

3. **Post Management:**
   - Create and delete posts.
   - Like and comment on posts.
   - View posts from friends.

5. **MongoDB Integration:**
   - Utilizes MongoDB as the database for storing user information, posts, and friendship connections.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm
- MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhay3333/Nodejs-intern-assignment-3-submission.git
   ```

2. Install dependencies:

   ```bash
   cd Nodejs-intern-assignment-3-submission
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and set the following variables:

   ```env
   PORT=4000
   MONGO_URL=your_mongo_url
   JWT_SECRET=your_jwt_secret
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

The API will be accessible at `http://localhost:4000`.

## API Endpoints

- **User Management:**
  - `POST /api/v1/user/register` - Register a new user.
  - `POST /api/v1/user/login` - Authenticate a user.
  - `GET /api/v1/user/userinfo` - Get user profile.
  - `PUT /api/v1/user/editprofile` - Update user profile.
  - `PUT /api/v1/user/v1/updateavatar/:userId` - Update user avatar.

- **Friendship:**
  - `POST /api/v1/user/userfollowunfollow/:followUserID` - Send a friend request.
  - `GET /api/v1/user/userprofile/:userID` - Get friends list.

- **Post Management:**
  - `POST /api/v1/posts/createpost` - Create a new post.
  - `DELETE /api/v1/posts/deletepost/:id` - Delete a post.
  - `PUT /api/v1/posts/updatepost/:id` - Update a post.
  - `POST /api/v1/posts/savedPost/:postID` - save a post.
  - `GET /api/v1/posts//getposts` - Get posts from friends.


## Contributing

1.Fork the repository.

2.Create a new branch: git checkout -b feature-name.

3.Make changes and commit: git commit -m "Add feature".

3.Push to the branch: git push origin feature-name.

4.Create a pull request.




#  Social Networking API with MongoDB

## Overview

This project is a Social Networking API built using Node.js, Express.js, and MongoDB. It provides a robust backend for a social networking platform, allowing users to create accounts, connect with friends, post updates, and interact with other users by commenting on their post.

## Features

1. **User Management:**
   - Register a new user account.
   - Authenticate users with JWT (JSON Web Tokens).
   - Update user profiles.

2. **Friendship:**
   - Send friend requests.
   - Accept or decline friend requests.
   - View friends list.

3. **Post Management:**
   - Create and delete posts.
   - Like and comment on posts.
   - View posts from friends.

5. **MongoDB Integration:**
   - Utilizes MongoDB as the database for storing user information, posts, and friendship connections.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm
- MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhay3333/Nodejs-intern-assignment-3-submission.git
   ```

2. Install dependencies:

   ```bash
   cd Nodejs-intern-assignment-3-submission
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and set the following variables:

   ```env
   PORT=4000
   MONGO_URL=your_mongo_url
   JWT_SECRET=your_jwt_secret
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

The API will be accessible at `http://localhost:4000`.

## API Endpoints

- **User Management:**
  - `POST /api/v1/user/register` - Register a new user.
  - `POST /api/v1/user/login` - Authenticate a user.
  - `GET /api/v1/user/userinfo` - Get user profile.
  - `PUT /api/v1/user/editprofile` - Update user profile.
  - `PUT /api/v1/user/v1/updateavatar/:userId` - Update user avatar.

- **Friendship:**
  - `POST /api/v1/user/userfollowunfollow/:followUserID` - Send a friend request.
  - `GET /api/v1/user/userprofile/:userID` - Get friends list.

- **Post Management:**
  - `POST /api/v1/posts/createpost` - Create a new post.
  - `DELETE /api/v1/posts/deletepost/:id` - Delete a post.
  - `PUT /api/v1/posts/updatepost/:id` - Update a post.
  - `POST /api/v1/posts/savedPost/:postID` - save a post.
  - `GET /api/v1/posts//getposts` - Get posts from friends.


## Contributing

1.Fork the repository.

2.Create a new branch: git checkout -b feature-name.

3.Make changes and commit: git commit -m "Add feature".

3.Push to the branch: git push origin feature-name.

4.Create a pull request.



