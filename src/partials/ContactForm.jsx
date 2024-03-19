import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PacmanLoader from "react-spinners/PacmanLoader";

export default function ContactUs() {

    const [loader, setLoader] = useState(false)
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const [infoMsg, setInfoMsg] = useState({ txt: "", opacity: "opacity-0", bg: "bg-gray-500" });
    const form = useRef();

    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessageValue(e.target.value);
    };

    const sendEmail = (e) => {
        setLoader(true)
        e.preventDefault();

        emailjs
            .sendForm('service_faktwon', 'template_9vrn5fm', form.current, {
                publicKey: 'X-q2wdxBcU0LGIxTo',
            })
            .then(
                () => {
                    setLoader(false)
                    setInfoMsg({ txt: "success", opacity: "opacity-100", bg: "bg-green-800" });
                    setEmailValue("")
                    setMessageValue("")
                    setNameValue("")
                },
                (error) => {
                    setLoader(false)
                    setInfoMsg({ txt: "error, please try again later", opacity: "opacity-100", bg: "bg-red-800" });
                    console.log(error.text);
                },
            );
    };

    useEffect(() => {
        if (infoMsg.opacity === "opacity-100") {
            setTimeout(() => {
                setInfoMsg({ txt: "", opacity: "opacity-0", bg: "bg-gray-500" });
            }, 2000);
        }
    }, [infoMsg.opacity]);

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 opacity-load-form">
            <span
                className={`fixed ${infoMsg.opacity} ${infoMsg.bg} transition-all font-semibold top-20 right-20 px-5 py-2 rounded z-10 font-sans lowercase text-white text-2xl`}>
                {infoMsg.txt}
            </span>
            {loader && 
                <span className={`fixed top-20 right-20 z-10`}>
                    <PacmanLoader color="#4b5eb0" />
                </span>
            }
            <label htmlFor="user_name" className="text-xl text-white">Name</label>
            <input type="text" name="user_name" id="user_name" value={nameValue} onChange={handleNameChange} className="text-white bg-zinc-800 py-[4px] rounded px-2 text-[16px] md:text-[18px]" />
            <label htmlFor="user_email" className="text-xl text-white">Email</label>
            <input type="email" name="user_email" id="user_email" value={emailValue} onChange={handleEmailChange} className="text-white bg-zinc-800 py-[4px] rounded px-2 text-[16px] md:text-[18px]" />
            <label htmlFor="message" className="text-xl text-white">Message</label>
            <textarea name="message" id="message" value={messageValue} onChange={handleMessageChange} className="bg-zinc-800 rounded resize-none text-white px-5 py-1 h-[200px] text-[16px]" placeholder='Message here...' />
            <input type="submit" value="Send" className="bg-zinc-900 p-2 rounded text-base md:text-xl font-semibold text-white md:hover:opacity-50 cursor-pointer" />
        </form>
    );
};
