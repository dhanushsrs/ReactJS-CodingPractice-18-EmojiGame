// Write your code here.
import './index.css'

const WonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LoseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, resetGame} = props
  const imgurl = isWon ? WonImage : LoseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  const onClickPlayAgain = () => {
    resetGame()
  }

  return (
    <div className="win-lose-container">
      <div className="score-details-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imgurl} alt="win or lose" className="win-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
