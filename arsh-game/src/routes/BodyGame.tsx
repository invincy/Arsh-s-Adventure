import { Link } from 'react-router-dom'

export default function BodyGame() {
  return (
    <div className="game-stub">
      <h1>Body Game</h1>
      <p>Mini-game coming soon.</p>
      <div id="game"></div>
      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}
