import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/Home/Home'
import Layout from '../components/shared/Layout'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>viewLeague</title>
        <meta name="description" content="Search for any league Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Layout>
  )
}

export default HomePage
