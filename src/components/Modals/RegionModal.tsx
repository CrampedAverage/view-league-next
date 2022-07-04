import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { regions } from '../../utils/commonData'
import Modal from './Modal'

interface RegionModalProps {
  closeModal: (arg0?: string) => void,
  region: string
}

type RegionKey = keyof typeof regions

const RegionModal = ({ closeModal, region }: RegionModalProps) => {
  const [regionValue, setRegionValue] = useState(region)

  return (
    <Modal closeModal={closeModal}>
      <header className="relative flex text-slate-400 ">
        <h2 className="mx-auto font-bold text-2xl">Regions</h2>
        <button className="absolute right-0 top-0 cursor-pointer" onClick={() => closeModal()}>
          <FaWindowClose size={32} />
        </button>
      </header>
      <form className="flex-grow text-slate-400 justify-center items-center mt-3">
        <ul className="flex flex-wrap justify-center items-end  box-border h-64">
          {Object.keys(regions).map(region => {
            const regionKey = region as RegionKey
            const regionData = regions[regionKey]
            return (
              <li
                className={`w-1/2 cursor-pointer mx-auto flex my-1 rounded-lg ${regionValue == regionKey ? "bg-secondary" : ""}`}
                key={regionKey}
              >
                <input
                  className="appearance-none rounded-full h-4 w-4 border p-2 border-gray-300 bg-gray-400 checked:bg-slate-200 checked:border-slate-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  id={region}
                  checked={regionKey === regionValue}
                  onChange={() => setRegionValue(regionKey)}
                  name="region"
                  value={region} />
                <label className="cursor-pointer flex-grow text-center font-semibold" htmlFor={regionKey}>{regionData.regionName}</label>
              </li>
            )
          })}
        </ul>
        <div className="flex justify-center mt-6">
          <button className="bg-zinc-300 dark:bg-secondary focus:bg-slate-300 dark:focus:bg-slate-600 font-bold h-5/6 my-auto mr-1 px-6 py-1 rounded-md hover:outline focus:outline focus:outline-2" type="button" onClick={() => closeModal(regionValue)}>Submit</button>
        </div>
      </form>

    </Modal >
  )
}

export default RegionModal