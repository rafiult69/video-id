import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
            console.log('Socket is already attached');
                    return res.end();
                        }

                            const io = new Server(res.socket.server);
                                res.socket.server.io = io;

                                    io.on("connection", (socket) => {
                                            console.log(`User  Connected: ${socket.id}`);

                                                    socket.on("join", (roomName) => {
                                                                socket.join(roomName);
                                                                            socket.emit("joined");
                                                                                    });

                                                                                            // Additional socket events for handling offers, answers, and ICE candidates can be added here
                                                                                                });

                                                                                                    return res.end();
                                                                                                    };

                                                                                                    export default SocketHandler;