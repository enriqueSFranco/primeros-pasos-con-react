import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  const className = `${styles.modal_container} ${isOpen ? styles.open_modal : ''}`
  return (
    createPortal(
      <div className={className}>
        <div className={styles.content}>
          {children}
        </div>
      </div>, document.getElementById('modal') as HTMLElement)
  )
}

export default Modal