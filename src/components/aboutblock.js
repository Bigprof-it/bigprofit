import * as React from "react"
import { useEffect, useRef, useState } from 'react';

import ImgBlackList from "../images/bg-blacklist.png"
import ImgVideoPoster from "../images/bg-poster-video.png"
import VideoAbout from "../images/video.mp4"

function VideoPlayer({ src, poster, isPlaying }) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    });
  
    return <video ref={ref} poster={poster} src={src} loop playsInline />;
}

const AboutBlock = ({ full }) => {
const [isPlaying, setIsPlaying] = useState(false);

if( full ) {
    return (
        <>
        <section className="about about_black">
            <div className="container">
            <h2>
                Наша миссия – помочь клиентам заработать на недвижимости и сделать
                гарантированный Big profit!
            </h2>
            <ul className="about__list">
                <li>Делимся списком доходной недвижимости</li>
                <li>Защищаем от мошенников</li>
                <li>Спасаем от бюрократической волокиты</li>
                <li>Делаем недвижимость инструментом заработка</li>
                <li>Создаем возможности для реализации желаний</li>
            </ul>
            <div className="about__blocks">
                <div className="about__block about__block_left">
                <div className={isPlaying ? "about__video play" : "about__video"}>
                    <div className="about__title">Дмитрий Осипов о компании</div>
                    <VideoPlayer
                        isPlaying={isPlaying}
                        src={VideoAbout}
                        poster={ImgVideoPoster}
                    />
                    <div className="about__video-play" onClick={() => setIsPlaying(!isPlaying)}>
                        <svg width={110} height={139} viewBox="0 0 110 139" fill="none">
                            <path
                            opacity="0.4"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.03859 0.246234C1.67905 -0.10486 2.45996 -0.078913 3.0757 0.313919L108.877 67.8139C109.453 68.1813 109.802 68.817 109.802 69.5C109.802 70.183 109.453 70.8187 108.877 71.1861L3.0757 138.686C2.45996 139.079 1.67905 139.105 1.03859 138.754C0.398139 138.403 0 137.73 0 137V2C0 1.26963 0.398139 0.597328 1.03859 0.246234ZM4 5.64834V133.352L104.083 69.5L4 5.64834Z"
                            fill="white"
                            />
                        </svg>
                    </div>
                    <div className="about__video-stop" onClick={() => setIsPlaying(!isPlaying)}>
                        <svg height={139} viewBox="0 0 14 30" width={110}>
                            <title />
                            <desc />
                            <defs />
                            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}>
                            <g
                                fill="white"
                                opacity="0.4"
                                transform="translate(-605.000000, -52.000000)"
                            >
                                <g transform="translate(605.000000, 52.000000)">
                                <rect height={139} rx="1.5" width={3} x={11} y={0} />
                                <rect height={139} rx="1.5" width={3} x={0} y={0} />
                                </g>
                            </g>
                            </g>
                        </svg>
                    </div>
                </div>
                </div>
                <div className="about__block about__block_right">
                <div className="about__picture">
                    <a
                    href="https://sochi.ru/zhizn-goroda/gradostroi/obekty-nezakonnogo-stroitelstva/obshchaya-informatsiya/%D0%9F%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%8C%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2,%20%D0%BF%D0%BE%D0%B4%D0%BB%D0%B5%D0%B6%D0%B0%D1%89%D0%B8%D1%85%20%D1%81%D0%BD%D0%BE%D1%81%D1%83%20%D0%BD%D0%BE%D0%B2.xlsx"
                    target="_blank" rel="noreferrer">
                    <div className="about__title">
                        Скачать перечень объектов, подлежащих сносу
                    </div>
                    <img src={ImgBlackList} alt="Перечень объектов, подлежащих сносу" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
} else {
    return (
        <>
        <section className="about">
            <div className="container">
            <h2>
                Наша миссия – помочь клиентам заработать на недвижимости и сделать
                гарантированный Big profit!
            </h2>
            <ul className="about__list">
                <li>Делимся списком доходной недвижимости</li>
                <li>Защищаем от мошенников</li>
                <li>Спасаем от бюрократической волокиты</li>
                <li>Делаем недвижимость инструментом заработка</li>
                <li>Создаем возможности для реализации желаний</li>
            </ul>
            <div className="about__block">
                <div className={isPlaying ? "about__video play" : "about__video"}>
                    <div className="about__title">Дмитрий Осипов о компании</div>
                    <VideoPlayer
                        isPlaying={isPlaying}
                        src={VideoAbout}
                        poster={ImgVideoPoster}
                    />
                    <div className="about__video-play" onClick={() => setIsPlaying(!isPlaying)}>
                        <svg width={110} height={139} viewBox="0 0 110 139" fill="none">
                            <path
                            opacity="0.4"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.03859 0.246234C1.67905 -0.10486 2.45996 -0.078913 3.0757 0.313919L108.877 67.8139C109.453 68.1813 109.802 68.817 109.802 69.5C109.802 70.183 109.453 70.8187 108.877 71.1861L3.0757 138.686C2.45996 139.079 1.67905 139.105 1.03859 138.754C0.398139 138.403 0 137.73 0 137V2C0 1.26963 0.398139 0.597328 1.03859 0.246234ZM4 5.64834V133.352L104.083 69.5L4 5.64834Z"
                            fill="white"
                            />
                        </svg>
                    </div>
                    <div className="about__video-stop" onClick={() => setIsPlaying(!isPlaying)}>
                        <svg height={139} viewBox="0 0 14 30" width={110}>
                            <title />
                            <desc />
                            <defs />
                            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}>
                            <g
                                fill="white"
                                opacity="0.4"
                                transform="translate(-605.000000, -52.000000)"
                            >
                                <g transform="translate(605.000000, 52.000000)">
                                <rect height={139} rx="1.5" width={3} x={11} y={0} />
                                <rect height={139} rx="1.5" width={3} x={0} y={0} />
                                </g>
                            </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
}

export default AboutBlock