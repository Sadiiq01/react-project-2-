import React from "react"
import ReactDOM from "react-dom"
import "./app.css"
// import Home from "./divComponent"


const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)

function App(){
    return (
        <>

        <header className="bg-slate-600 text-center text-white py-5">
            <h1>welcome to my site </h1>
        </header>

        <div className="flex px-12 space-x-3 my-6  text-white ">
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold ">sadiiq mukhtaar</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold">xamse mohamed</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
        </div>
        <div className="flex px-12 space-x-3 my-6  text-white ">
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold ">salmaan jimcale</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold">khalid farax</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
        </div>
        <div className="flex px-12 space-x-3 my-6  text-white ">
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold ">ahmed nuur</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold">nuur farax</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
        </div>
        <div className="flex px-12 space-x-3 my-6  text-white ">
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold ">daud ismacil</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold">mohamed kamal</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
        </div>
        <div className="flex px-12 space-x-3 my-6  text-white ">
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold ">farx buraale</h1>
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
            <div className="bg-slate-500 p-5 rounded-2xl">
                <h1 className="text-center font-extrabold"></h1>yuusuf guulled
                <p>
                It seems like you might want to create a 
                simple text or design. Could you clarify 
                a bit more about what you're looking for? 
                For example, are you trying to create
                </p>
            </div>
        </div>
        
        <footer className="bg-slate-600 text-center underline text-white py-6"> © sadiiq mukhtaar</footer>


        </>
    )
    
}


root.render(<App/>)