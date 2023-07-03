# AI Task Manager

## Overview
AI Task Manager is a Node.js application with Express and MongoDB that helps in managing tasks with AI integration for task prioritization.

## Installation
1. Clone the repository
2. Run npm install to install dependencies
3. Create a .env file with your environment variables
4. Start the server with npm start

## API Endpoints
- **Users**
  - POST /api/users/register - Register a new user
  - POST /api/users/login - Login a user

- **Tasks**
  - POST /api/tasks - Create a new task
  - GET /api/tasks - Get all tasks
  - GET /api/tasks/user - Get tasks by user
  - GET /api/tasks/:id - Get a task by ID
  - PUT /api/tasks/:id - Update a task
  - DELETE /api/tasks/:id - Delete a task
  - POST /api/tasks/assign - Assign a task to a user

- **AI**
  - POST /api/ai/prioritize - Prioritize tasks