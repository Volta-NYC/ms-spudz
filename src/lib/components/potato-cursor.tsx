"use client"

import { useEffect } from "react"

export default function PotatoCursor() {
  useEffect(() => {
    const root = document.documentElement

    const turnBakedOn = () => {
      root.classList.add("cursor-baked")
    }

    const turnBakedOff = () => {
      root.classList.remove("cursor-baked")
    }

    window.addEventListener("mousedown", turnBakedOn)
    window.addEventListener("mouseup", turnBakedOff)
    window.addEventListener("blur", turnBakedOff)
    window.addEventListener("dragend", turnBakedOff)

    return () => {
      window.removeEventListener("mousedown", turnBakedOn)
      window.removeEventListener("mouseup", turnBakedOff)
      window.removeEventListener("blur", turnBakedOff)
      window.removeEventListener("dragend", turnBakedOff)
      root.classList.remove("cursor-baked")
    }
  }, [])

  return null
}
