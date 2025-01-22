import React, { useRef, useEffect, useState } from 'react'
import { ifStartsWithCommand } from './scripts/MatchCommand';
import 'remixicon/fonts/remixicon.css'


const App = () => {

    const inputRef = useRef(null); // Ref for focusing the input
    const spanRef = useRef(null);

    const commands = ["about", "contact", "projects", "--help", "clear", "cls", "ls", "github", "instagram", "linkedin"]

    const [command, setCommand] = useState("");
    const [themeImgSrc, setThemeImgSrc] = useState("dark.png");
    const [theme, setTheme] = useState("bg-black text-white")
    const [suggestedCommand, setSuggestedCommand] = useState("");
    const [result, setResult] = useState(<></>)


    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focus the input when consoleBody is clicked
        }
    };

    const changeTheme = () => {
        if (themeImgSrc == "light.png") {
            setThemeImgSrc("dark.png");
            setTheme("bg-black text-white")
        } else {
            setThemeImgSrc("light.png")
            setTheme("bg-white")
        }
    }
    const completeCommand = () => {
        if (command === "") {
            setSuggestedCommand(""); // Clear suggestion if the command is empty
            return;
        }
        // Filter commands that start with the current input
        const match = ifStartsWithCommand(commands, command);
        setSuggestedCommand(match);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault(); // Prevent the default "select all" behavior
            if (suggestedCommand) {
                setCommand(suggestedCommand); // Set the input value to the suggestion
                setSuggestedCommand("");
                inputRef.current.focus(); // Refocus the input for further typing
            }
        }

        if (e.key === "Enter") {
            e.preventDefault();
            getResult();
            setSuggestedCommand("")
        }
    };

    const getResult = ()=>{
        switch (command) {
            case "cls":
            case "clear":
                setResult("");
                setSuggestedCommand("")
                setCommand("");
                break;
            case "instagram":
                setResult(<>Instagram :<a href='https://www.instagram.com/e_harshlo/' target='_blank'> e_harshlo </a></>);
                setSuggestedCommand("")
                setCommand("");
                break;
            case "linkedin":
                setResult(<>LinkedIn :<a href='https://www.linkedin.com/in/harshsonegra/' target='_blank'> Harsh Sonegra </a></>);
                setSuggestedCommand("")
                setCommand("");
                break;
            case "github":
                setResult(<>Github :<a href='https://github.com/virtualharsh/' target='_blank'> virtualharsh</a></>);
                setSuggestedCommand("")
                setCommand("");
                break;
            case "contact":
                setResult(<div className='flex flex-col gap-3'>
                    <div>Instagram :<a href='https://www.instagram.com/e_harshlo/' target='_blank'> e_harshlo </a></div>
                    <div>LinkedIn :<a href='https://www.linkedin.com/in/harshsonegra/' target='_blank'> Harsh Sonegra </a></div>
                    <div>Github :<a href='https://github.com/virtualharsh/' target='_blank'> virtualharsh</a></div>
                    <div>Email : harshsonegrahere@gmail.com</div>
                </div>);
                setSuggestedCommand("")
                setCommand("");
                break;
            case "about":
                setResult(<><h2>Hey ! great brains 👋, It's Harsh Sonegra on the other side of your screen 📱. I've been consuming oxygen from the atmosphere for the last 18 years 🧑‍🎓. I've completed my Diploma in Computer Engineering 💻 from Government Polytechnic, Porbandar and I'm currently pursuing my pre-final year of Bachelors' in CSE ( Data Science ) from Vishwakarma Government Engineering College, Chandkheda. Mostly you'll find me talking about web development 💻, and Machine Learning 📊, and Algorithm Optimization 📈 Besides this, you may find me singing 🎤, dancing 🕺, reading a good book 📖, or playing Chess ♟️. I am looking forward to engaging with more students and expanding my network. I am excited to exchange insights and knowledge! Let me share a good line with you..
                </h2>
                    <p>If We both have an apple and we exchange it, We both will still have one apple each but If we both have an idea and we exchange it we both will have 2 ideas. So let's just grow and share our thoughts and improve exponentially !</p></>);
                setSuggestedCommand("")
                setCommand("");
                break;
            case "--help":
                setResult(<div className='flex flex-col gap-3'>
                    <div>cls</div>
                    <div>clear</div>
                    <div>about</div>
                    <div>contact</div>
                    <div>projects</div>
                    <div>linkedin</div>
                    <div>github</div>
                    <div>instagram</div>
                </div>

                );
                setSuggestedCommand("")
                setCommand("");
                break;
            default:
                setResult(<>No Command found please type --help to list commands</>)
                break;
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Automatically focus the input on page load
        }
    }, [themeImgSrc]);

    useEffect(() => {
        if (command == "") {
            setSuggestedCommand("");
        }
        if (spanRef.current && inputRef.current) {
            const spanWidth = spanRef.current.offsetWidth;
            inputRef.current.style.width = `${spanWidth + 2}px`;
        }
    }, [command]);

    return (
        // Background
        <div className="bg-black w-full h-full ps-32 pt-16">
            {/* Console Window */}
            {/* Todo */}
            <div className="w-9/12 h-5/6 bg-slate-400 rounded-xl p-2 flex flex-col">
                <div className='flex items-center justify-between'>
                    {/* Console Title */}
                    <div className={`w-3/12 h-1/12 ${theme} duration-200 border-[1px] border-b-0 p-2 border-black flex justify-between items-center rounded-t-lg`}>
                        <div className="flex items-center gap-x-4">
                            <img className="w-12 rounded-2xl h-12" src="icon.png" alt="Not found" />
                            <h2 className="text-lg font-semibold">Harsh's Portfolio</h2>
                        </div>
                        <button 
                        className={`justify-self-end px-2 hover:bg-gray-700 duration-200 rounded-md ${theme}`}>
                                <i className="ri-close-line text-2xl"></i>
                        </button>
                    </div>
                    {/* light button */}
                    <button className='mr-4 w-7' >
                        <img className='hover:scale-110 duration-200-' src={themeImgSrc} alt="not found" onClick={changeTheme} />
                    </button>
                </div>

                {/* Console Body */}
                <div onClick={handleClick} className={`${theme} w-full flex-grow border-[1px] border-black rounded-b-lg rounded-tr-lg p-4`}>
                    {/* Information */}
                    <div className='font-monoCursive font-semibold text-2xl'>
                        <h1>Hello World ! <br />
                            Welcome to the console, <br />
                            Type --help for options</h1>
                    </div>
                    {/* Commands */}
                    <div id='information' className='font-monoCursive font-semibold text-2xl mt-5 flex gap-x-2'>
                        <p>HARSH-PORTFOLIO $</p>
                        <div className='flex'>
                            <div>
                                {/* Hidden span to calculate text width */}
                                <span
                                    ref={spanRef}
                                    style={{
                                        position: "absolute",
                                        visibility: "hidden",
                                        whiteSpace: "pre",
                                        font: "inherit", // Matches the input font for accurate measurement
                                    }}
                                >
                                    {command}
                                </span>

                                {/* Input field */}
                                <input
                                    type="text"
                                    name="command"
                                    id="command"
                                    value={command}
                                    autoComplete="off"
                                    autoCapitalize="off"
                                    ref={inputRef}
                                    className={`border-0 focus:outline-none ${theme}`}
                                    onChange={(e) => {
                                        setCommand(e.target.value)
                                        completeCommand();
                                    }}
                                    onKeyDown={handleKeyDown}
                                    style={{
                                        boxSizing: "content-box", // Ensures width adjusts correctly
                                    }}
                                />
                            </div>
                            <span className='text-gray-400'>{suggestedCommand}</span>
                        </div>
                    </div>
                    <div className='mt-5 text-justify p-2 font-monoCursive font-semibold text-2xl'>{result}</div>
                </div>
            </div>

        </div>
    )
}
export default App;