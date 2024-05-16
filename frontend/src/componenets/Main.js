import Home from './home/Home'
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const Main = () => {
  return (
    <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
  )
}
export default Main