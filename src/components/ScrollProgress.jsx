"use client";
import React from 'react';
import { useScroll } from '../hooks/useScroll';
export default function ScrollProgress() {
  const { scrollProgress } = useScroll();
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[100]">
      <div className="h-full bg-brand-500 transition-all duration-75" style={{ width: `${scrollProgress}%` }} />
    </div>
  );
}