import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { regions } from '../utils/commonData'

const useRegion = (initialState: string | (() => string)): [string, Dispatch<SetStateAction<string>>] => {
  const [region, setRegion] = useState(initialState)

  useEffect(() => {
    if (!Object.keys(regions).includes(region)) {
      return setRegion("euw")
    }
    localStorage.setItem("region", region)
  }, [region])

  return [region, setRegion]
}

export default useRegion