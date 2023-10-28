"use client";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Timer() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  function clock() {
    setDate(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    setTimeout(() => {
      clock();
    }, 1000);
  });

  return <div className="timer">{date}</div>;
}
