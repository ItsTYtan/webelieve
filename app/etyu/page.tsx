"use client"

import styles from '@/app/etyu/etyu.module.css';
import { useRef } from 'react';

export default function Page() {

    const firstRef = useRef<HTMLAudioElement>(null);
    const secondRef = useRef<HTMLAudioElement>(null);
    const thirdRef = useRef<HTMLAudioElement>(null);

    function playFirst() {
        var audio = firstRef.current!;
        audio?.play();
    }

    function playSecond() {
        var audio = secondRef.current!;
        audio?.play();
    }

    function playThird() {
        var audio = thirdRef.current!;
        audio?.play();
    }
    return(
        <main className={styles.Screen}>
            <audio src="audio/first.mp4" id='first' ref={firstRef}></audio>
            <audio src="audio/second.mp4" id='second' ref={secondRef}></audio>
            <audio src="audio/third.mp4" id='third' ref={thirdRef}></audio>
            <h2 className={styles.Header}>
                Kenny&apos;s Homepage
            </h2>
            <div className={styles.MainText}>
                <a href="/sjkd" >Absolutely nothing to see here</a>  
            </div>
            <div className={styles.MainText}>
                Just a blog that I use to log my daily activities
            </div>
            <div className={styles.Body}>
                <h3 className={styles.bodyHeader}>
                    20 January 2023
                </h3>
                Been thinking about this dish I had while I was in holiday in Tijuana, Mexico. However, I can&apos;t seem to remember the name. I do know that it&apos;s some form of salad though.
                <br></br>
                I think there might also be something to do with the number of letters in this dish?
            </div>
            <div className={styles.first}>
                <img src='cd.png' onClick={playFirst}></img>
            </div>
            <div className={styles.second}>
                <img src='cd.png' onClick={playSecond}></img>
            </div>
            <div className={styles.third}>
                <img src='cd.png' onClick={playThird}></img>
            </div>
            <div className={styles.Name}>
                Astwta
            </div>
        </main>
    )
}