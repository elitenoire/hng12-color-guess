type ColorOptionsProps = {
  options: string[]
  disabled: boolean
  onGuess: (color: string) => void
}

export function ColorOptions({ options, onGuess, disabled }: ColorOptionsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {options.map((color, index) => (
        <button
          key={index}
          className="size-16 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ backgroundColor: color }}
          onClick={() => onGuess(color)}
          disabled={disabled}
          data-testid="colorOption"
        ></button>
      ))}
    </div>
  )
}

