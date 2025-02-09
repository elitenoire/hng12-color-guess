type ColorTargetProps = {
  color: string
}

export function ColorTarget({ color }: ColorTargetProps) {
  return <div data-testid="colorBox" className="size-28 rounded-lg shadow-lg my-8" style={{ backgroundColor: color }} />
}

