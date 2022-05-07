import type { NextPage } from "next"
import Head from "next/head"
import Main from "../components/Main"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sorting Algorithm Visualizer</title>
        <meta name="description" content="Portfolio of Nico Lindenau" />
        <link rel="icon" href="/" />
      </Head>
      <div className="h-screen">
        <Main />
        <Footer />
      </div>
    </>
  )
}
export default Home
