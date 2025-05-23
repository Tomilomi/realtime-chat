import express from "express"
import logger from "morgan"
import { Server } from "socket.io"
import { createServer } from "node:http"
import cors from "cors"

const PORT = 3000

const app = express()
const server = createServer(app)
const io = new Server(server, {
    connectionStateRecovery: {}
})


app.use(cors())

io.on("connection", (socket) => {
    console.log("a user has connected")

    socket.on("disconnect", () => {
        console.log("an user has disconnected")
    })

    socket.on("chat message", (msg) => {
        console.log("message: " + msg)
    })

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg)
    })
})

app.use(logger("dev"))

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + '/client/loggin.html')
})


app.get("/chat", (req, res) => {
    res.sendFile(process.cwd() + '/client/chat.html')
})

app.get("/style-chat", (req, res) => {
    res.sendFile(process.cwd() + '/client/chat.css')
})



server.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})