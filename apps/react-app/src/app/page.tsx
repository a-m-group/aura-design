'use client';
import { useState, ChangeEvent } from 'react'
import Image from "next/image";

import {
  dangerouslyArrayToString,
  defineCustomElements,
  Card,
  FlexBox,
  LayoutGrid,
  LayoutHoly,
  Segmented,
  Textfield,
} from '@aura-group/aura-design';
import '@aura-group/aura-design/dist/style.css';
dangerouslyArrayToString();
defineCustomElements({ Card, FlexBox, LayoutGrid, LayoutHoly, Segmented, Textfield });

export default function Home() {
  const [input, setInpt] = useState('A')
  const [segmented, setSegmented] = useState(['A', 'B'])
  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setInpt(e.target?.value)
  }
  const add = ()=> {
    setSegmented([...segmented, 'C'])
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ar-flex-box justify="center">
            <ar-segmented
                size="default"
                value={input}
                options={segmented}
                onChange={handleChange}
            ></ar-segmented>
            <button onClick={add}>Add</button>
            <input type="text" value={input} readOnly/>
        </ar-flex-box>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
