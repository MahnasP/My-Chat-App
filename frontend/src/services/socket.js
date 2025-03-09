import io from "socket.io-client";

class SocketService {
  socket = null;

  connect(userId) {
    this.socket = io(import.meta.env.VITE_BACKEND_SERVER, {
      query: { userId },
    });
    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  getSocket() {
    return this.socket;
  }
}

export const socketService = new SocketService();
