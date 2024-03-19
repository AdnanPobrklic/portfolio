import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from 'gsap';
import mongodbSvg from "/mongodb.svg"

export default function CurrentProject({color, data}){

    const comp = useRef()
    
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from(".opacity-load-project-preview", {
            opacity: 0,
            duration: 1.5,
            delay: 0.3
            })
        }, comp)

        return () => ctx.revert()
    }, [data.title]);
    
    return(
        <div ref={comp} className="flex gap-5 flex-col items-start w-[95%] lg:w-[50%] lg:ml-auto lg:mt-[100px] lg:mr-[100px] ">
            <h1 className="text-slate-300 border-b inline-block text-3xl md:text-4xl font-semibold opacity-load-project-preview rounded pb-2"
                style={{
                    borderColor: `rgb(${color.red},${color.green},${color.blue})`,
                    transition: 'border-color 0.5s ease-in-out, transform .3s ease-in-out'
                }}
            >
                {data.title}
            </h1>
            <p className="text-base lg:text-[19px] opacity-load-project-preview tracking-wider leading-8 md:leading-10 border-l pl-5 rounded"
                style={{
                    borderColor: `rgb(${color.red},${color.green},${color.blue})`,
                    transition: 'border-color 0.5s ease-in-out, transform .3s ease-in-out'
                }}
            >
                <span style={{color: `rgb(${color.red},${color.green},${color.blue})`, transition: 'color 0.5s ease-in-out'}}>
                    {data.title}&nbsp;
                </span>
                {data.desc}
            </p>
            <div className="flex flex-col-reverse md:flex-row w-full justify-start gap-5 text-base md:text-xl opacity-load-project-preview pb-5 ">
                <div className="links-container pl-1 flex flex-col md:flex-row gap-5 items-stretch  justify-center ">
                    {data.youtube && 
                        <a href={data.youtube} target="_blank" className="flex justify-center items-center gap-2 p-2 bg-zinc-800 text-slate-200 text-black rounded font-semibold cursor-pointer transition-all hover:opacity-50 text-base lg:text-[17px] ">
                            <i className="fa-brands fa-youtube"></i>
                            video preview
                        </a>
                    }
                    <a href={data.viewSite} target="_blank" className="flex justify-center items-center gap-2 p-2 bg-zinc-800 text-slate-200 text-black rounded font-semibold cursor-pointer transition-all hover:opacity-50 text-base lg:text-[17px]">
                        <i className="fa-solid fa-desktop"></i>
                        View site
                    </a>
                    <a href={data.repo} target="_blank" className="flex justify-center items-center gap-2 p-2 bg-zinc-800 text-slate-200 text-black rounded font-semibold cursor-pointer transition-all hover:opacity-50 text-base lg:text-[17px]">
                        <i className="fa-brands fa-github-alt"></i>
                        Repo
                    </a>
                </div>
                <ul className="pl-1 flex flex-row gap-5 items-center justify-center">
                    {data.stack.includes("react") && 
                    <li>
                        <i 
                            style={{borderColor: `rgb(${color.red},${color.green},${color.blue})`, transition: 'border-color 0.5s ease-in-out, transform .3s ease-in-out'}}  className="fa-brands fa-react text-blue-500 text-4xl border-b pb-2">
                        </i>
                    </li>}
                    {data.stack.includes("node") && 
                    <li>
                        <i 
                            style={{borderColor: `rgb(${color.red},${color.green},${color.blue})`, transition: 'border-color 0.5s ease-in-out, transform .3s ease-in-out'}}  className="fa-brands fa-node text-lime-500 text-4xl border-b pb-2">
                        </i>
                    </li>}
                    {data.stack.includes("mongodb") && 
                    <li className="w-[50px] border-b"
                        style={{borderColor: `rgb(${color.red},${color.green},${color.blue})`, transition: 'border-color 0.5s ease-in-out, transform .3s ease-in-out'}} 
                    >
                        <img src={mongodbSvg} alt="mongodb-icon" />
                    </li>}
                </ul>
            </div>
        </div>
    )
}