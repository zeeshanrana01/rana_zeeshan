"use client";
import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
export default function CustomCursor() {
  const { x, y, isPointer } = useMousePosition();
  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 rounded-full border ${isPointer ? 'w-10 h-10 border-brand-400 bg-brand-400/10 scale-110' : 'w-6 h-6 border-slate-500/40 bg-transparent'}`}
      style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`, display: x === -100 ? 'none' : 'block' }}
    />
  );
}