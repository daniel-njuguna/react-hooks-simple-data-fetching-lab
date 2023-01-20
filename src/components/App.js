// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [imgSrc, setImgSrc] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => setImgSrc(data.message))
    }, [])

    if (!imgSrc) return <p>Loading...</p>

    return (
        <img src={imgSrc} alt="A Random Dog"></img>
    )

}

export default App;