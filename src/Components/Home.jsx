import { useEffect, useState, useLayoutEffect, useRef } from "react"
import Typewriter from 'typewriter-effect';
import gsap from 'gsap'

export default function Main({color}){
    
    const comp = useRef()
    

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from(".opacity-load-p", {
            opacity: 0,
            duration: .5,
            delay: 1
            })
            
        }, comp)

        return () => ctx.revert()
    }, []);
    
    return(
        <main className="w-[100%] px-5 md:px-0 md:w-[90%] lg:w-[55%] lg:min-w-[800px] mx-auto text-slate-400 font-tektur opacity-load-third select-none flex flex-col items-start" ref={comp}>
            <h1 className=" pt-[80px] md:pt-[15%] text-4xl md:text-5xl lg:text-6xl pb-2 border-b border-color" style={{borderColor: `rgb(${color.red},${color.green},${color.blue})`, transition: 'border-color 0.5s ease-in-out'}} >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Welcome !')
                        .pauseFor(50)
                        .start();
                    }}
                />
            </h1>
            <p className="w-full mt-16 mb-5 pl-5 pb-5 text-base md:text-xl opacity-load-p  border-l border-b border-slate-700 rounded tracking-wider md:leading-10"
            style={{borderColor: `rgb(${color.red},${color.green},${color.blue})`, transition: 'border-color 0.5s ease-in-out'}} >
                I'm 
                <span style={{color: `rgb(${color.red},${color.green},${color.blue})`, transition: 'color 0.5s ease-in-out'}}>
                    &nbsp;Adnan Pobrklic
                </span>, with a passionate interest in all things about 
                <span style={{color: `rgb(${color.red},${color.green},${color.blue})`, transition: 'color 0.5s ease-in-out'}}>
                    &nbsp;web development
                </span>. Through this website, I aim to share my experiences, skills, and accomplishments gained throughout my constant learning journey. Currently, I'm actively 
                <span style={{color: `rgb(${color.red},${color.green},${color.blue})`, transition: 'color 0.5s ease-in-out'}}>
                    &nbsp;seeking potential jobs or freelancing opportunities
                </span> to further enhance my skills and contribute to projects that inspire me. Thank you for being here, and I hope you find what you're looking for.
            </p>
        </main>
    )
}

