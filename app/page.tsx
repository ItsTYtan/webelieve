"use client"

import { useRef, useState } from "react";
import getAIResponse from "./lib/AI";
import Image from "next/image";

export default function Home() {
  const resRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [timesClicked, setTimesClicked] = useState(0);
  const [helpMsgsShown, setHelpMsgsShown] = useState(0);

  function handleClick() {
    resRef.current!.textContent = "";
    if (timesClicked > 2) {
      showHelpMsg(helpMsgsShown).then((res) => resRef.current!.textContent = res);
      setHelpMsgsShown(helpMsgsShown + 1);
    } else {
      getAIResponse(input).then(async (stream) => {
        for await (const chunk of stream) {
          resRef.current!.textContent += chunk.choices[0]?.delta?.content || "";
        }
      });
    }
    setInput("");
    setTimesClicked(timesClicked + 1);
  };

  function showHelpMsg(helpMsgsShown: number): Promise<string> {
    return fetch("/helpmsgs.txt")
      .then((res) => res.json())
      .then((res) => res[helpMsgsShown.toString()]);
  }

  return (
    <main className='h-full flex flex-col items-center justify-center p-16 gap-8'>
      <Image
        className="rounded-xl shadow-md"
        src="/artifex_logo.png"
        alt=""
        height={0}
        width={400}
      >
      </Image>
      <h1 className="text-xl">Hi, how can I help you today?</h1>
      <div className='mx-auto w-5/6 h-16 flex items-center'>
        <input 
          className='border-4 h-full w-full rounded-lg border-gray'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        >
        </input>
        <button 
          className='w-16 h-full border-2'
          type="submit"
          onClick={handleClick}
        >
          submit
        </button>
      </div>
      <div ref={resRef} className="border w-full h-32"></div>
    </main>
  );
}
