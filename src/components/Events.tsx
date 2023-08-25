"use client";
import React, { useState } from "react";
import { WebsocketMessage, useWebSocketClient } from "./WebSocketClient";
import Heading from "./Heading";
import { parseDate } from "@/app/utils/parseDate";

export function Events() {
  const [data, setData] = useState<WebsocketMessage[]>([]);

  const handleDataReceived = (newData: WebsocketMessage) => {
    setData((prevData) => {
      if (prevData.length < 1000) {
        return [newData, ...prevData];
      }
      const newArr = [...prevData];
      newArr.pop();
      newArr.unshift(newData);
      return newArr;
    });
  };
  useWebSocketClient(handleDataReceived);

  return (
    <div className="overflow-hidden">
      <Heading heading="Событие" />
      <table className="table-fixed overflow-scroll min-w-full text-left text-sm">
        <thead className="border-b font-medium">
          <tr className=" border-b px-6 py-8">
            <th>Дата</th>
            <th>Событие</th>
          </tr>
          {data.map(({ ctime, event }) => (
            <tr key={event} className="border-b px-6 py-8">
              <td>{parseDate(ctime)}</td>
              <td>{event}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default Events;
