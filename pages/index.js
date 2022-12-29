
import About from "../views/About"
import Contact from "../views/Contact"
import Hero from "../views/Hero"
import Projects from "../views/Projects"
import Skills from "../views/Skills"

export default function Home ({ mailToken }) {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact mailToken={ mailToken }/>
    </main>
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
