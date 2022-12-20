import { useState, useEffect } from "react"

interface RandomRangeProps {
  min?: number
  max?: number
}

export default function useRandomRange({ min, max }: RandomRangeProps) {
  const [number, setNumber] = useState<number>(0)

  useEffect(() => {
    min = Math.ceil(min!)
    max = Math.floor(max!)

    const randomShit = Math.floor(Math.random() * (max - min + 1)) + min
    setNumber(randomShit)
  }, [])

  return number
}
