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
        <meta property="og:title" content="My Portfolio - Martin Planiscig" />
        <meta property="og:description" content="Hi! I'm Martín, I can make awasome websites with MERN stack." />
        <meta property="og:image" content="https://i.imgur.com/VxsDcG3.png" />
        <meta property="og:url" content='https://martinplaniscig.netlify.app/'/>
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='627' />
        <meta property="og:type" content='website'/>
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
