
export default function Navbar({ setActiveTab, showNav, setShowNav }){

    const handleUpdateTab = (num) => {
        setActiveTab(num)
        if(window.innerWidth < 768) setShowNav(prevState => !prevState)
    }

    return(
        <nav className={`${showNav ? "block" : "hidden"} opacity-100 z-50 absolute top-0 bg-stone-950 md:bg-transparent w-full h-full md:h-auto md:static md:mt-5 text-slate-400 font-tektur transition-all`}>
            <ul className='opacity-load-second mt-10 md:mt-0 flex flex-col md:flex-row gap-10 sm:gap-14 justify-center items-center uppercase select-none font-semibold text-[25px]'>
                <li onClick={() => handleUpdateTab(0)} className='md:hover:text-slate-600 md:hover:scale-x-110 transition-all cursor-pointer'>Home</li>
                <li onClick={() => handleUpdateTab(1)} className='md:hover:text-slate-600 md:hover:scale-x-110 transition-all cursor-pointer'>Projects</li>
                <li onClick={() => handleUpdateTab(2)} className='md:hover:text-slate-600 md:hover:scale-x-110 transition-all cursor-pointer'>Contact</li>
            </ul>
        </nav>
    )
}