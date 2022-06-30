import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

const useModal = (initialState: boolean): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [showModal, setShowModal] = useState(initialState)

  useEffect(() => {
    // toggleOverlayMode
  }, [showModal])

  return [showModal, setShowModal]
}

export default useModal