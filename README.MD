# Tomilomi's Real-Time Chat

A real-time chat application built with Node.js, Express, Socket.io, and Morgan.
Styled with Bootstrap and NES.css for a retro chat look and feel.

---

🌐 **Features**

* 💬 Real-time bi-directional chat with Socket.io
* 🚀 Backend server with Express
* 📊 Logging with Morgan
* 🎨 Retro-style UI using NES.css + Bootstrap

---

**Tech Stack**

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white)
![Morgan](https://img.shields.io/badge/Morgan-333333?style=flat)

### Frontend
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![NES.css](https://img.shields.io/badge/NES.css-Retro%20UI-ff69b4?style=flat)

---

📁 **Project Structure**

```
CHAT/
├── client/
│   ├── icons/                # Icons for the frontend
│   ├── chat.css              # Chat styles (NES.css + custom styles)
│   ├── chat.html             # Main chat interface
│   ├── loggin.html           # Login screen
│   └── index.js              # Frontend logic (events and sockets)
│
├── server/
│   └── app.js                # Server logic: Express, Socket.io, and routes
│
├── .gitignore                # Files and folders ignored by Git
├── package.json              # Project configuration and dependencies
├── README.md                 # Project documentation

```

---

🛠️ **Getting Started**

**Clone repo**

```bash
git clone <repository-url>
cd chat
```

**Install dependencies**

```bash
npm install
```

**Run the server**

```bash
npm run dev
```

**Open the frontend**
Just open `client/loggin.html` in your browser to access the chat.

---

## Future Improvements

- Dark mode toggle
- Chat history persistence
- Authentication system
- React in frontend


