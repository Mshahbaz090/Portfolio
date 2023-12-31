import React, { useRef, useState } from 'react'
import "./ImageGenerator.css"
import yes from "../Assets/yes.svg"




const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/")
    let inputRef = useRef(null)


    const ImageGenerator = async () => {
        if (inputRef.current.value === "") {
            return 0;
        }

        const response = await fetch(
            "https://api.openai.com/v1/images/generations ",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization:
                        "Bearer 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",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512",
                }),
            }
        );
        let data = await response.json();
        let data_array = data.data;
        setImage_url(data_array[0].url);
        console.log(data)
    }






    return (
        <div className='ai-image-generator'>
            <div className="header">
                Ai image <span>Generator</span></div>
            <div className="image-loading">
                <div className='img'><img src={image_url === "/" ? yes : image_url} alt='' /></div>


            </div>
            <div className="search-box">
                <input type='text' ref={inputRef} className='search-input' placeholder='Describe what you want' />
                <div className="generate-btn" onClick={() => { ImageGenerator() }}>Genarate</div>
            </div>
        </div>
    )
}

export default ImageGenerator
