import React from "react";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addClient } from "../app/features/client";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const User = () => {
  const url = useLocation().pathname;
  const name = url.slice(1);

  const dispatch = useDispatch();

  const [messega, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messega.length != 0) {
      const data = {
        name: name,
        message: messega,
      };

      socket.emit("message", data);
      setMessage("");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          className="rounded m-2 w-48  h-8"
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={messega}
        />
        <button className="border-2 border-custom-green text-custom-green p-1">Send</button>
      </form>
    </div>
  );
};

export default User;
