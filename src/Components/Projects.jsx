import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'
import CurrentProject from '../partials/CurrentProject';

const ProjectsList = styled.ul`
    &::before {
        content: " ";
        position: absolute;
        width: 150px;
        height: 150px;
        border-radius: 10px;
        border-top: 3px solid rgb(${props => props.color.red},${props => props.color.green},${props => props.color.blue});
        border-left: 3px solid rgb(${props => props.color.red},${props => props.color.green},${props => props.color.blue});
        transition: border-color 0.5s ease-in-out;
    }
`;

export default function Projects({ color }) {
    const comp = useRef();
    const [currentProject, setCurrentProject] = useState(-1);
    const menuRef = useRef(null);

    const handleClick = (index) => {
        setCurrentProject(index);
        if(window.innerWidth > 768){
            gsap.to(menuRef.current, { duration: 1,  left: "20%"});
        }else{
            gsap.to(menuRef.current, { duration: 1,  y: "-75px"});
        }
        
    };

    useEffect(() => {
        gsap.fromTo(menuRef.current.children, { autoAlpha: 0, opacity: 1 }, { duration: 0.5, autoAlpha: 1, opacity: 0, stagger: 0.3 });
    }, []); 

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from(".opacity-load-list", {
                opacity: 0,
                duration: 0.5,
                delay: 0.2,
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    const getData = (index) => {
        switch (index) {
            case 0:
                return {
                    title: "Project Management System",
                    desc: "is a comprehensive application I developed for managing projects, tracking work hours, and monitoring user attendance. It supports role-based access, real-time updates, and communication, along with features for task management, notification system, and report generation. This project underscores my skills in creating complex, real-time, role-based systems.",
                    youtube: "https://www.youtube.com/watch?v=r7zLRfbbAx4&t",
                    viewSite: "https://evidencija-projekata.onrender.com",
                    repo: "https://github.com/AdnanPobrklic/project-managment",
                    stack: ["react", "node", "mongodb"]
                }
            case 1:
                return {
                    title: "Multiplayer Tic-tac-toe",
                    desc: "is a game I developed to demonstrate my expertise in more challenging areas of backend development, specifically sockets. The game features a multiplayer mode where a link is generated allowing a second player to join the game. It also includes a single-player mode, where moves are randomly selected.",
                    viewSite: "https://tic-tac-toe-jvaa.onrender.com",
                    repo: "https://github.com/AdnanPobrklic/multiplayer-tic-tac-toe",
                    stack: ["react", "node"]
                }
            case 2:
                return {
                    title: "Weather Forecast App",
                    desc: "is an application designed to showcase my skills in effectively fetching and retrieving data, as well as displaying it on the frontend. This application utilizes the WeatherAPI to fetch the latest weather data, providing users with accurate and up-to-date information.",
                    viewSite: "https://weather-forecast-adnanp.netlify.app",
                    repo: "https://github.com/AdnanPobrklic/weather-forecast",
                    stack: ["react"]
                };
            case 3:
                return {
                    title: "Friends & Chat Social Media",
                    desc: "is a basic social networking platform I developed, which can also be described as a community interaction hub. It allows users to create and update their profiles, add friends, and engage in real-time conversations with them. The platform boasts features such as real-time updates, online status indicators, read receipts, and friend management functionalities. This project highlights my ability to create interactive and user-friendly environments, handle real-time data, and manage user relationships.",
                    viewSite: "https://friends-chat-a8iu.onrender.com",
                    repo: "https://github.com/AdnanPobrklic/friends-chat",
                    stack: ["react", "node", "mongodb"]
                };
            default:
                return {
                    msg: "Error" 
                };
        }
    };


    return (
        <main className={`text-slate-400 font-tektur opacity-load-third select-none flex flex-col items-center gap-5 lg:gap-0 lg:flex-row pt-[100px]`} ref={comp}>
            <ProjectsList ref={menuRef} color={color} className={`flex flex-col lg:absolute  lg:top-[20%] lg:left-[50%] lg:translate-x-[-50%] ${currentProject === -1 ? "md:gap-10" : "md:gap-8"} gap-7 items-start opacity-load-list`}>
                {Array.from({ length: 4 }, (_, i) => (
                    <li className={`z-20 ${currentProject === -1 ? "md:text-xl" : "md:text-[17px]"} ${i == 0 ? "mt-5" : ""} text-[15px] uppercase border-b md:hover:scale-110 cursor-pointer ml-5`}
                        key={i}
                        style={{ borderColor: `rgb(${color.red},${color.green},${color.blue})`, transition: 'border-color 0.5s ease-in-out, transform .3s ease-in-out' }}
                        onClick={() => handleClick(i)}>
                        {getData(i).title}
                    </li>
                ))}
            </ProjectsList>
            {currentProject !== -1 && <CurrentProject data={getData(currentProject)} color={color} />}
        </main>
    );
}
