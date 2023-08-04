import { useState } from "react"
import { INITIAL_BOARD, WINNER_COMBOS } from "@/shared/constants.d"
import { TURNS } from "@/shared/types.d"
import Square from "./Cell"
import Modal from "./Modal"
import styles from './Board.module.css'

const Board = () => {
  const [board, updateBoard] = useState(() => {
    const storedBoard = window.localStorage.getItem('board')
    if (storedBoard) return JSON.parse(storedBoard)
    return INITIAL_BOARD
  })
  const [turn, updateTurn] = useState(() => {
    const storedTurn = window.localStorage.getItem('turn')
    if (storedTurn) return JSON.parse(storedTurn)
    return TURNS.X
  })
  const [winner, setWinner] = useState<string | null>(null)

  function endGame ({ currentBoard }): boolean {
    return currentBoard.every(cell => cell != null)
  }

  function checkWinner ({ currentBoard }) {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]) {
        return currentBoard[a]
      }
    }
  }

  function resetBoard (): void {
    updateBoard(INITIAL_BOARD)
    updateTurn(TURNS.X)
    setWinner(null)
  }

  function updatedTurn ({ turn }: { turn: string }) {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    updateTurn(newTurn)
    window.localStorage.setItem('turn', JSON.stringify(newTurn))
  }

  function updatedBoard ({ board, squareIdx }) {
    const newBoard = [...board]
    newBoard[squareIdx] = turn
    updateBoard(newBoard)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    return newBoard
  }

  function handleUpdateBoard ({ squareIdx }: { squareIdx: number }) {
    // evitar reasignaciones o si hay ganador detenemos el juego
    if (board[squareIdx] || winner) return

    // actualiazamos el board
    const newBoard = updatedBoard({ board, squareIdx })

    // obtener al ganador
    const gameWinner = checkWinner({ currentBoard: newBoard })
    setWinner(gameWinner) // el estado es asincrono

    // actualizamos el turno
    updatedTurn({ turn })
  }

  const gameOver = endGame({ currentBoard: board })

  return (
    <>
      <div className={styles.container}>
        <button disabled={!gameOver} onClick={resetBoard}>reiniciar el juego</button>
        <div className={styles.board}>
          {board.map((it: string, idx: number) => (
            <Square idx={idx} updateBoard={handleUpdateBoard}>{it}</Square>
          ))}
        </div>
        <footer className={styles.foooter_turns}>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </footer>
      </div>
      <Modal isOpen={Boolean(winner)}>
        {winner ? (
          <div className={styles.container_winner}>
            <p className={styles.winner}>Ha ganado el jugador:</p>
            <Square>{winner}</Square>
            <button onClick={resetBoard}>Volver a jugar</button>
          </div>
        ) : null}
      </Modal>
    </>
  )
}

export default Board