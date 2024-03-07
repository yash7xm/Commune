import socket from "../config/socket-config";

export function joinRoom(roomId: string) {
    socket.emit("joinRoom", roomId);
}