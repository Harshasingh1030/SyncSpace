# SyncSpace

A modern real-time video conferencing platform built using WebRTC, Socket.IO, React, Node.js, Express, and MongoDB.

SyncSpace enables users to create secure meeting rooms, communicate through peer-to-peer video calls, and maintain a history of previous meetings. The project is being actively extended with additional collaboration and productivity features.

---

## Features

- Secure user authentication
- Create and join video meetings
- Peer-to-peer video and audio using WebRTC
- Real-time signaling with Socket.IO
- Meeting history
- Responsive user interface
- JWT-based authentication
- MongoDB database integration

---

## Tech Stack

### Frontend

- React
- Material UI
- React Router
- Axios
- WebRTC

### Backend

- Node.js
- Express.js
- Socket.IO
- MongoDB
- Mongoose
- JWT Authentication

---

## Project Structure

```
SyncSpace/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Harshasingh1030/SyncSpace.git
```

### Install dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

---

## Running the Project

### Start Backend

```bash
cd backend
npm start
```

or

```bash
npm run dev
```

### Start Frontend

```bash
cd frontend
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8000
```

---

## Upcoming Features

- Screen sharing improvements
- Chat enhancements
- File sharing
- Meeting scheduling
- Waiting room
- Raise hand
- Meeting recordings
- Dark mode
- Profile management
- Email invitations
- Better meeting analytics
- Mobile responsive redesign

---

## Learning Objectives

This project explores:

- WebRTC architecture
- Socket.IO signaling
- Peer-to-peer communication
- Authentication using JWT
- REST API development
- React Context API
- MongoDB data modeling
- Real-time application development

---

## License

This project is licensed under the MIT License.

---

## Author

**Harsha Singh**

GitHub: https://github.com/Harshasingh1030