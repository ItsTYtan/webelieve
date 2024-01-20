"use client"

import { useRef, useState } from "react";
import getAIResponse from "./lib/AI";
import Image from "next/image";

export default function Home() {
  const [input, setInput] = useState("");
  const [helpMsgsShown, setHelpMsgsShown] = useState(0);
  const resArrRef = useRef<string[]>([]);
  const finalResponseRef = useRef<HTMLParagraphElement>(null);

  function handleClick() {
    resArrRef.current.push(finalResponseRef.current?.textContent || "");
    resArrRef.current.push(input);
    finalResponseRef.current!.textContent = "";
    setInput("");
    // if (resArrRef.current.length > 2) {
    //   showHelpMsg(helpMsgsShown).then((res) => finalResponseRef.current!.textContent += res);
    //   setHelpMsgsShown(helpMsgsShown + 1);
    // } else {
    getAIResponse(input).then(async (stream) => {
      for await (const chunk of stream) {
        finalResponseRef.current!.textContent += chunk.choices[0]?.delta?.content || "";
      }
    });
    // }
  };

  function showHelpMsg(helpMsgsShown: number): Promise<string> {
    return fetch("/helpmsgs.txt")
      .then((res) => res.json())
      .then((res) => res[helpMsgsShown.toString()]);
  }

  return (
    <main className='h-full flex flex-col items-center justify-center p-16 gap-8'>
      {
        resArrRef.current.map((val, index) => {
          return(
            <div key={index}>{val}</div>
          )
        })
      }
      <div ref={finalResponseRef}></div>
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
    </main>
  );
}


// const AIChatResponse = forwardRef(function AIChatResponse({
//   resArr,
//   ref,
// }:{
//   resArr: string[]
//   ref: ForwardedRef<HTMLParagraphElement>
// }) {
//   if (resArr.length > 0) {
//     return resArr.map((res: string, index: number) => {
//       return(
//         <div key={index}>
//           <p ref={ref}>{res}</p>
//         </div>
//       )
//     })
//   } else {
//     return (
//       <>
//         <Image
//           className="rounded-xl shadow-md"
//           src="/artifex_logo.png"
//           alt=""
//           height={0}
//           width={400}
//         >
//         </Image>
//         <h1 className="text-xl">Hi, how can I help you today?</h1>
//       </>
//     )
//   }
// });