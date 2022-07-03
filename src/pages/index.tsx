import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Home from '../components/Home/Home'
import RegionModal from '../components/Modals/RegionModal'
import Layout from '../components/shared/Layout'
import useModal from '../hooks/useModal'
import useRegion from '../hooks/useRegion'

const HomePage: NextPage = () => {
  const [showRegionModal, setShowRegionModal] = useModal(false)
  const [region, setRegion] = useRegion("euw")

  const openModal = (open: boolean): void => {
    setShowRegionModal(open)
  }

  const closeModal = (region: string): void => {
    setRegion(region)
    setShowRegionModal(false)
  }

  return (
    <Layout>
      <Head>
        <title>viewLeague</title>
        <meta name="description" content="Search for any league Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home openModal={openModal} region={region} />
      {showRegionModal && <RegionModal closeModal={closeModal} />}
    </Layout>
  )
}

export default HomePage
