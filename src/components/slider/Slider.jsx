import React, { useState } from "react";
import './slider.scss';

export default function Slider ({ images }) {
    
    const [imagesIndex, setImagesIndex] = useState(0);

    function prevImage () {
        setImagesIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    function nextImage () {
        setImagesIndex((prevIndex) => (prevIndex === images.length -1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slider">
            {images.length > 1 && (
                <>
                    <button className="arrow-left" onClick={prevImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="arrow-right" onClick={nextImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                        </svg>
                    </button>
                    <div className="slider__counter">{imagesIndex + 1}/{images.length}</div>
                </>
            )}
            <div className="slider__container">   
                <div key={imagesIndex} className="slider__container--image">
                    <img src={images[imagesIndex]} alt="logement" />
                </div>
            </div>
        </div>
    ); 
};