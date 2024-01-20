"use client"

import { useRef, useState } from "react";
import getAIResponse from "./lib/AI";

export default function Home() {
  const [input, setInput] = useState("");
  const [helpMsgsShown, setHelpMsgsShown] = useState(0);
  const resArrRef = useRef<string[]>([]);
  const finalResponseRef = useRef<HTMLParagraphElement>(null);
  const [counter, setCounter] = useState(1)

  function handleClick() {
    resArrRef.current.push(finalResponseRef.current?.textContent || "");
    resArrRef.current.push(input);
    finalResponseRef.current!.textContent = "";
    var test = Math.random()
    console.log(test)
    setInput(""); 
    if (counter >= 5 || (counter >= 3 && test < (1 / (5 - counter + 1)))) {
      setCounter(1);
      showHelpMsg(helpMsgsShown);
      setHelpMsgsShown(helpMsgsShown + 1);
      if (helpMsgsShown == 3) {
        setHelpMsgsShown(0)
        document.getElementById("Button")!.style.display='block'
      }
    } else {
      setCounter(counter + 1);
      getAIResponse(input).then(async (stream) => {
      for await (const chunk of stream) {
        finalResponseRef.current!.textContent += chunk.choices[0]?.delta?.content || "";
      }
    });
    }
  };

  function showHelpMsg(helpMsgsShown: number) {
    fetch("/helpmsgs.txt")
      .then((res) => res.json())
      .then((res) => {
        finalResponseRef.current!.textContent = res[helpMsgsShown.toString()]
      });
  }

  function goNext() {
    window.location.href = '/rbgo'
  }

  return (
    <main className='h-full flex flex-col items-left justify-end p-16 gap-8'>
      {
        resArrRef.current.map((val, index) => {
          const chatUser = index % 2 == 0 ? "ARTIFEX:" : "You:";
          if (val == "") return
          return(
            <div className="bg-gray rounded-lg shadow-md p-2" key={index}>
              <h1 className="font-bold">{chatUser}</h1>
              <p className="text-left">{val}</p>
            </div>
          )
        })
      }
      <div className={`bg-gray rounded-lg shadow-md p-2 ${resArrRef.current.length == 0 ? "hidden" : ""}`}>
        <h1 className="font-bold">{"ARTIFEX:"}</h1>
        <p ref={finalResponseRef} className="text-left"></p>
      </div>
  
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
      <a href="/rbgo" className="hidden absolute top-4 left-4 w-16 h-8" id="Button">
      </a>
    </main>
  );
}