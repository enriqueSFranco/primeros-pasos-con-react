import React from 'react'
import styles from './Cell.module.css'

interface CellProps {
  idx?: number
  children: React.ReactNode
  isSelected?: boolean
  updateBoard?: ({ squareIdx }: { squareIdx: number }) => void
}

const Cell: React.FC<CellProps> = ({ idx = 0, children, isSelected, updateBoard = () => { } }) => {
  const className = `${styles.square} ${isSelected ? styles.selected : ''}`
  return (
    <div
      key={`square-${idx}`}
      onClick={() => updateBoard({ squareIdx: idx })}
      className={className}
    >{children}</div>
  )
}

export default Cell