"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";

import "./AutoSlideshow.css"
export function AutoSlideshow(props:{backgroundColors:string[],pictureCaptions:string[],slideDelay:number,pictures:string[],links:string[],picWidth:number,picHeight:number}) {

    const [publicationSlideIndex, setPublicationSlideIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        // @ts-ignore
        timeoutRef.current = setTimeout(
            () =>
                setPublicationSlideIndex((prevIndex) =>
                    prevIndex === props.backgroundColors.length - 1 ? 0 : prevIndex + 1
                ),props.slideDelay
        );

        return () => {resetTimeout();};
    }, [publicationSlideIndex]);

    return (
        <div className={"slideshowContainer"}>
            <div className={"slideshow"} style={{transform: `translate3d(${-publicationSlideIndex * 100}%, 0, 0)`}}>
                {props.backgroundColors.map((backgroundColor, index) => (
                    <div className="slide"
                         key={index}
                         style={{backgroundColor}}>
                        <Link href={props.links[index]}>
                            <div className={"picContainer"}>
                                <Image width = {props.picWidth} height = {props.picHeight} src={props.pictures[index]} alt={"iqp image"} className={"slidePic h-auto"}></Image>
                                <p className="slideTitle">{props.pictureCaptions[index]}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="dots">
                {props.backgroundColors.map((_, idx) => (
                    <div key={idx}
                         className={`dot${publicationSlideIndex === idx ? " active" : ""}`}
                         onClick = {() => {setPublicationSlideIndex(idx);}}>
                    </div>
                ))}
            </div>
        </div>
    );

}