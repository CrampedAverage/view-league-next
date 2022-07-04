import React, { useRef } from 'react'

export interface ModalProps {
  closeModal: () => void
  children?: React.ReactNode
}

const Modal = ({ children, closeModal }: ModalProps) => {
  const modalView = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLInputElement
    if (modalView.current && !modalView.current.contains(target)) {
      closeModal()
    }
  }

  return (
    <div className="absolute min-w-full min-h-full flex items-center " onClick={handleOutsideClick}>
      <div className="bg-gray-200 dark:bg-primary rounded mx-auto flex-col px-6 py-3 h-96" style={{ width: "32rem" }} ref={modalView}>
        {children}
      </div>
    </div>
  )
}

export default Modal;

