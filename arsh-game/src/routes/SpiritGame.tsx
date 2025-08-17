import { Link } from 'react-router-dom'

export default function SpiritGame() {
  return (
    <div className="game-stub">
      <h1>Spirit Game</h1>
      <p>Mini-game coming soon.</p>
      <div id="game"></div>
      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}
