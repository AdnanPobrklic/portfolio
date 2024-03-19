import { useEffect, useState, memouseRef, useLayoutEffect, useRef } from "react"
import Typewriter from 'typewriter-effect';
import gsap from 'gsap'
import ContactForm from "../partials/ContactForm"

export default function CurrentProject({color, title}){

    const comp = useRef()
    
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from(".opacity-load-form", {
                opacity: 0,
                duration: 1.5,
                delay: 0.2
            })
        }, comp)

        return () => ctx.revert()
    }, [title]);
    
    return(
        <main className="text-slate-400 pt-[50px] md:pt-[100px] pb-5 mx-auto w-[90%] md:w-[60%] font-tektur opacity-load-third select-none" ref={comp}>
            <h1 className="text-3xl mb-8 font-semibold border-b p-2 opacity-load-form" 
            style={{borderColor: `rgb(${color.red},${color.green},${color.blue})`, transition: 'border-color 0.5s ease-in-out'}}>
                Contact me !
            </h1>
            < ContactForm />
        </main>
    )
}

