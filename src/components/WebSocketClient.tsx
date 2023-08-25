import { useEffect } from "react";
import { w3cwebsocket as WebSocket } from "websocket";
export interface WebsocketMessage {
  ctime: number;
  event: string;
}

export const useWebSocketClient = (onDataReceived: any) => {
  useEffect(() => {
    const socket = new WebSocket("wss://test.relabs.ru/event");
    socket.onopen = () => console.log("WebSocket connection opened.");
    socket.onmessage = (event) => {
      if (event.data instanceof Buffer) throw Error();
      if (event.data instanceof ArrayBuffer) throw Error();
      const message = JSON.parse(event.data) as WebsocketMessage;
      onDataReceived(message);
    };
    socket.onerror = (event) => {
      console.error("WebSocket error:", event);
    };

    socket.onclose = (e) => console.log("Connection closed");
    return () => {
      socket.close();
    };
  }, [onDataReceived]);
};
