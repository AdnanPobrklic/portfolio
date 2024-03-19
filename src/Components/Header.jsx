import resume from "/adnan-pobrklic-resume-en.pdf"

export default function Header({setShowNav}){

    const handleNavShow = () => {
        setShowNav(prevState => !prevState)
    }

    return(
        <header className="user-select-none absolute w-full top-[-40px] px-1 opacity-load-first socials flex justify-between md:justify-end text-slate-500 text-[18px] md:text-3xl">     
            <span className="md:hidden" onClick={handleNavShow}><i className="md:hover:opacity-50 cursor-pointer fa-solid fa-bars mr-[90%]"></i></span>
            <div className="flex gap-5 items-center">
                <a href={resume} download="adnan-pobrklic-resume-en.pdf" className="cursor-pointer md:hover:text-slate-600 md:hover:scale-x-110 transition-all">CV</a>
                <a href="https://github.com/AdnanPobrklic" target="_blank"><i className="fa-brands fa-github-alt cursor-pointer md:hover:text-slate-600 md:hover:scale-x-110 transition-all"></i></a>       
                <a href="mailto:adn.pobrklic@gmail.com" target="_blank"><i className="fa-solid fa-envelope cursor-pointer md:hover:text-slate-600 md:hover:scale-x-110 transition-all"></i></a>
            </div>
        </header>
    )
}
