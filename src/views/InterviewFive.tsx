import { useCallback, useEffect, useState } from 'react'
import wordleApi from '@/api/wordle'

enum GAME_STATUS {
  PLAYING = 'playing',
  FINISHED = 'finished'
}

function InterviewFive () {
  const [answer, setAnswer] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [turn, setTurn] = useState<number>(0)
  const [status, setStatus] = useState<GAME_STATUS.PLAYING | GAME_STATUS.FINISHED>(GAME_STATUS.PLAYING)
  const [words, setWords] = useState<string[][]>(() => Array.from({ length: 6 }, () => new Array(5).fill('')))

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (status === GAME_STATUS.PLAYING) {
        switch (event.key) {
          case 'Enter': {
            if (words[turn].some(letter => letter.trim() === '')) return

            if (words[turn].join('') === answer) {
              setStatus(GAME_STATUS.FINISHED)
            }

            setTurn((turn) => turn + 1)

            return
          }
          case 'Backspace': {
            let firstEmptyIndex = words[turn].findIndex((letter) => letter === '')

            if (firstEmptyIndex === -1) {
              firstEmptyIndex = words[turn].length
            }

            words[turn][firstEmptyIndex - 1] = ''

            setWords(words.slice())

            return
          }
          default: {
            if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
              const firstEmptyIndex = words[turn].findIndex((letter) => letter === '')

              if (firstEmptyIndex === -1) return

              words[turn][firstEmptyIndex] = event.key.toUpperCase()

              setWords(words.slice())

              return
            }
          }
        }
      } else if (status === GAME_STATUS.FINISHED) {
        setTurn(0)
        setStatus(GAME_STATUS.PLAYING)
        setWords(() => Array.from({ length: 6 }, () => new Array(5).fill('')))
        getWord()

      }
    },
    [turn, words, answer, status],
  )

  // TODO: CREAR UN SERVICIO PARA RECUPERAR UNA PALABRA DE LA API WORDLE
  const getWord = async () => {
    try {
      setLoading(true)
      const responseWordle = await wordleApi.word.random()
      setAnswer(responseWordle)
    } catch (error) {
      if (error instanceof Error) {
        setAnswer(null)
        throw new Error(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getWord()
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <main className='board'>
      {loading ? (<p>loading</p>) : (
        words.map((word, wordIndex) => (
          <section key={`section-${wordIndex}`} className='word'>
            {word.map((letter, letterIndex) => {
              const isCorrect = letter && wordIndex < turn && letter === answer[letterIndex] &&
                answer.includes(letter)
              const isPresent =
                letter &&
                wordIndex < turn &&
                letter !== answer[letterIndex] &&
                answer.includes(letter)

              return (
                <article key={`square-${letterIndex}`} className={`letter ${isPresent && 'present'} ${isCorrect && 'correct'}`}>
                  {letter}
                </article>
              )
            })}
          </section>
        ))

      )}
    </main>
  )
}

export default InterviewFive
