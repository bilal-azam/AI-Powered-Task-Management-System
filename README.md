# Project Name

## Description
This is a Node.js application with Express.js, MongoDB, and AI features.

## Features
- User management
- Task management
- Chat feature
- Notifications
- User roles

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Configure environment variables.
4. Run `npm start` to start the server.

## API Endpoints
- **User**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Login a user
  - `PUT /api/users/role` - Assign a role to a user
- **Task**
  - `POST /api/tasks` - Create a new task
  - `GET /api/tasks` - Get all tasks
  - `GET /api/tasks/:id` - Get a task by ID
  - `PUT /api/tasks/:id` - Update a task
  - `DELETE /api/tasks/:id` - Delete a task
  - `POST /api/tasks/assign` - Assign a task to a user
  - `PUT /api/tasks/status` - Update the status of a task
  - `GET /api/tasks/search` - Search tasks
- **Chat**
  - `POST /api/chat/send` - Send a message
  - `GET /api/chat/messages/:userId` - Get messages for a user
- **Notifications**
  - `POST /api/notifications` - Send notifications