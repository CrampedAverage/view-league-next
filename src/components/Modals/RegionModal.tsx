import React from 'react'
import Modal from './Modal'

interface RegionModalProps {
  closeModal: (arg0: string) => void
}

const RegionModal = ({ closeModal }: RegionModalProps) => {

  const closeRegionModal = () => {
    console.log("called")
    closeModal("euw")
  }

  return (
    <Modal closeModal={closeRegionModal}>

    </Modal>
  )
}

export default RegionModal