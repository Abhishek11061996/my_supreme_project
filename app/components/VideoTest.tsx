'use client'
import React from 'react'

export default function VideoTest() {
  return (
    <div className="h-screen flex items-center justify-center">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        controls // Add controls for testing
        className="w-full max-w-2xl border-2 border-red-500"
      >
        <source src="/assets/videos/automotive.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  )
}