import Head from "next/head"
import About from "../views/About"
import Contact from "../views/Contact"
import Hero from "../views/Hero"
import Projects from "../views/Projects"
import Skills from "../views/Skills"

export default function Home ({ mailToken }) {
  return (
    <>
      <Head>
        <title>Hey, welcome.</title>
        <meta name="description" content="Hi! I'm Martín, web developer." />
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:image" content="https://i.imgur.com/VxsDcG3.png" />
        <link rel="icon" href="assets/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-center items-center'>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact mailToken={ mailToken }/>
      </main>
    </>
  )
}

export const getServerSideProps = () => {
 
  const mailToken = process.env.MAIL_TOKEN

  return {
    props:{
      mailToken 
    }
  }
}
