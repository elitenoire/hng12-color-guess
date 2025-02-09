"use client"

import { useState, useEffect } from "react"
import { ColorTarget } from "./color-target"
import { ColorOptions } from "./color-options"
import { ScoreBox } from "./score-box"
import { NewGameButton } from "./new-game-button"

import { generateGameColors } from "../utils"

export function PlayGame() {
  const [targetColor, setTargetColor] = useState("")
  const [colorOptions, setColorOptions] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing")
  const [statusMessage, setStatusMessage] = useState("")

  const startNewGame = () => {
    const { target, options } = generateGameColors()
    setStatusMessage("")
    setTargetColor(target)
    setColorOptions(options)
    setGameStatus("playing")
  }

  const handleGuess = (color: string) => {
    if (color === targetColor) {
      setScore((prevScore) => prevScore + 1)
      setStatusMessage("Correct! You are amazing!")
      startNewGame()
    } else {
      setGameStatus("lost")
      setStatusMessage("Wrong! Game Over.")
    }
  }

  const handleNewGame = () => {
    setScore(0)
    startNewGame()
  }

useEffect(() => {
    startNewGame()
  }, [])


  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-2">Color Guess Game</h1>
      {statusMessage && <p className="mt-4 text-lg font-semibold">{statusMessage}</p>}
      <ColorTarget color={targetColor} />
      <ColorOptions options={colorOptions} onGuess={handleGuess} disabled={gameStatus === "lost"} />
      <ScoreBox score={score} />
      <NewGameButton onClick={handleNewGame} />
    </div>
  )
}

