import { useEffect, useLayoutEffect, useState, useRef, createContext } from 'react'
import gsap from 'gsap'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  
  const comp = useRef()
  const [red, setRed] = useState(15)
  const [green, setGreen] = useState(150)
  const [blue, setBlue] = useState(150)
  const [activeTab, setActiveTab] = useState(0)
  const [showNav, setShowNav] = useState(window.innerWidth < 800 ? false : true)

  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth < 768 ? false : true)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    let timeoutId = null;
    const mouseMoveHandler = e => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
  
      let red = Math.abs(e.clientX - centerX) % 256;
      let green = Math.abs(e.clientY - centerY) % 256;
      let blue = (red + green) % 256;

      const brightness = Math.round(((parseInt(red) * 299) +
                      (parseInt(green) * 587) +
                      (parseInt(blue) * 114)) / 1000);
      const threshold = 125; 

      if (brightness < threshold) {
        red = 50;
        green = 205;
        blue = 50;
      }

      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setRed(red);
        setGreen(green);
        setBlue(blue);
      }, 50); 
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".opacity-load-first", {
        opacity: 0,
        duration: .3,
        delay: 0.2
      }).from(".opacity-load-second", {
        opacity: 0,
        duration: .5,
        stagger: 0.5
      })
      
    }, comp)

    return () => ctx.revert()
  }, []);

  return (  
    <div 
      className={`min-h-[calc(100dvh-100px)] mx-5 my-[50px] transition-all border rounded bg-neutral-950 relative`} 
      ref={comp} style={{borderColor: `rgb(${red},${green},${blue})`, transition: 'border-color 0.5s ease-in-out'}}>
      < Navbar showNav={showNav} setShowNav={setShowNav} setActiveTab={setActiveTab}/>
      < Header setShowNav={setShowNav}/>
        {activeTab === 0 ?
          < Home color={{red, green, blue}}/>
        : activeTab === 1 ?
          < Projects color={{red, green, blue}}/>
        : activeTab === 2 ?
          < Contact color={{red, green, blue}}/>
        :
          <div>Nepoznato</div>
      }
      <Footer />
    </div>
  )
}

export default App
