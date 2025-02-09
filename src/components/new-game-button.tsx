type NewGameButtonProps = {
  onClick: () => void
}

export function NewGameButton({ onClick }: NewGameButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      data-testid="newGameButton"
    >
      New Game
    </button>
  )
}

