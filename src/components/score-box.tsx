type ScoreBoxProps = {
  score: number
}

export function ScoreBox({ score }: ScoreBoxProps) {
  return <div className="text-2xl font-bold mb-4">Score: {score}</div>
}

