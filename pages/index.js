
import About from "../views/About"
import Hero from "../views/Hero"
import Skills from "../views/Skills"

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Hero/>
      <About/>
      <Skills/>
    </main>
  )
}
