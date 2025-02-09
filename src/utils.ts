export function generateRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
}

export function generateGameColors() {
  const target = generateRandomColor()
  const options = [target]

  while (options.length < 6) {
    const color = generateRandomColor()
    if (!options.includes(color)) {
      options.push(color)
    }
  }

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[options[i], options[j]] = [options[j], options[i]]
  }

  return { target, options }
}

