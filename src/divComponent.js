import React from "react"
export default function Home({header , parag}){
    return(
        <>
        <h1>{header}</h1>
        <p>
            {parag}
        </p>
        </>
    )
}