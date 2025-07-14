// src/app/page.jsx
'use client';

import Header from './components/Header';
import Hero from './components/Hero';


export default function Page() {
  return (
    <main className="relative overflow-hidden">
      {/* Gradient image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-img"
      />

      {/* Blur white glow */}
      <div
        className="h-0 w-[40rem] absolute top-[20%] right-[-5%]
        shadow-[0_0_900px_20px_rgba(255,255,255,0.4)] -rotate-[30deg] -z-10"
      ></div>

      <Header />
      <Hero />
    </main>
  );
}
