import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { io } from 'socket.io-client';

const Room = () => {
    const router = useRouter();
        const { id: roomName } = router.query;
            const socketRef = useRef();

                useEffect(() => {
                        socketRef.current = io();

                                socketRef.current.emit('join', roomName);

                                        return () => {
                                                    socketRef.current.disconnect();
                                                            };
                                                                }, [roomName]);

                                                                    return (
                                                                            <div>
                                                                                        <h1>Room: {roomName}</h1>
                                                                                                    {/* Video and chat components will go here */}
                                                                                                            </div>
                                                                                                                );
                                                                                                                };

                                                                                                                export default Room;