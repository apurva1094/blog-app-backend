# Blog App Backend – Phase 1

## Phase 1 Completed 
Backend setup using Node.js, Express, and MongoDB.

### Features
- Express server setup
- MongoDB connection using Mongoose
- Environment variable configuration
- Proper project structure

### How to Run
```bash
npm install
npm run dev
Tech Stack

Node.js

Express.js

MongoDB

Mongoose


Commit it → push.

This makes your submission look **very professional**.

---

##  Final Status
 Phase 1: **COMPLETED**  
 Repo: **SUBMISSION READY**  
 Proof link: **READY**

When you’re ready, say **“Start Phase 2”** and I’ll guide you step-by-step like before

Blog App Backend – Phase 2 ✅
Overview

Phase 2 of the Blog App Backend implements full backend functionality with authentication, blog management, and database integration.
This phase ensures that users can securely register, login, and manage blogs with proper route protection.

Features Implemented
User Authentication

Register new users with hashed passwords

Login existing users and receive JWT tokens

Protected routes with auth middleware to ensure only authorized users can access certain endpoints

Blog Management (CRUD)

Create Blog: Only logged-in users can create a blog

Read Blogs: View all blogs or a single blog by ID

Update Blog: Only the author can update their blog

Delete Blog: Only the author can delete their blog

Database

MongoDB Atlas used as the database

Mongoose models:

User – stores user info

Blog – stores blog posts with a reference to the author

Middleware

auth.js ensures route protection using JWT

Handles unauthorized access with proper error messages

Folder Structure
blog-app-backend/
│
├─ src/
│   ├─ controllers/
│   │   ├─ authController.js
│   │   └─ blogController.js
│   │
│   ├─ middleware/
│   │   └─ auth.js
│   │
│   ├─ models/
│   │   ├─ User.js
│   │   └─ Blog.js
│   │
│   ├─ routes/
│   │   ├─ authRoutes.js
│   │   └─ blogRoutes.js
│   │
│   └─ index.js
│
├─ .env
├─ package.json
└─ package-lock.json

Environment Variables (.env)
PORT=5000
MONGO_URI=<Your MongoDB Atlas Connection String>
JWT_SECRET=<Your JWT Secret Key>

How to Run

Clone the repository:

git clone https://github.com/apurva1094/blog-app-backend.git
cd blog-app-backend


Install dependencies:

npm install


Add .env file with credentials (see above)

Start the server:

npm run dev


Server runs on http://localhost:5000

API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user and get JWT token
Blogs
Method	Endpoint	Description
POST	/api/blogs	Create a new blog (protected)
GET	/api/blogs	Get all blogs
GET	/api/blogs/:id	Get a single blog by ID
PUT	/api/blogs/:id	Update a blog (only author)
DELETE	/api/blogs/:id	Delete a blog (only author)
