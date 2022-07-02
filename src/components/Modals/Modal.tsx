import React, { useRef } from 'react'

export interface ModalProps {
  closeModal: () => void
  children?: React.ReactNode
}

const Modal = ({ children, closeModal }: ModalProps) => {
  const modalView = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalView.current && modalView.current !== event.target) {
      closeModal()
    }
  }

  return (
    <div className="absolute min-w-full min-h-full flex items-center" onClick={handleOutsideClick}>
      <div className="w-96 h-96 bg-primary mx-auto" ref={modalView}>
        {children}
      </div>
    </div>
  )
}

export default Modal;

