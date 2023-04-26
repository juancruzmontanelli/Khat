import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.css";
import Navbar from "./componets/Navbar";
import User from "./componets/user";
import { Route, Routes, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addClient, reset } from "./app/features/client";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const messageEndRef = useRef(null);

  const url = useLocation().pathname;
  const name = url.slice(1);

  const clients = useSelector((state) => state.client);

  const dispatch = useDispatch();

  useEffect(() => {
    const add = (message) => {
      dispatch(addClient(message));
    };

    const reset = (message) => {
      dispatch(reset(message));
    };
    socket.on("message", add);

    socket.on("oldClients", add);

    socket.on("reset", reset);

    return () => {
      socket.off("message", add);
      socket.off("oldClients");
    };
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView()
  }, [clients]);

  const reset = () => {
    socket.emit("reset", []);
  };

  return (
    <div className="App">
      <Navbar />
      <div className=" border  border-lime-700  m-2 mt-24 h-96 overflow-auto flex flex-col chat-container">
        {clients.map((client) => {
          if (client.name == name)
            return (
              <div className="rounded-3xl rounded-br-none bg-lime-900 m-2 w-28 self-end p-4">
                <h2 className="text-left">{client.message}</h2>
              </div>
            );
          else
            return (
              <div className="rounded-xl rounded-bl-none bg-zinc-700 m-2 w-28 p-4">
                <h5 className="text-left font-semibold">{client.name}</h5>
                <h2 className="text-left text-gray-300">{client.message}</h2>
              </div>
            );
        })}

        <div ref={messageEndRef} />
      </div>

      <Routes>
        <Route path="/julieta" element={<User />} />
        <Route path="/juan" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
