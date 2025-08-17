import { Link } from 'react-router-dom'

export default function MindGame() {
  return (
    <div className="game-stub">
      <h1>Mind Game</h1>
      <p>Mini-game coming soon.</p>
      <div id="game"></div>
      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}
