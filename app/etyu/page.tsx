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
        <main>
            <audio src="audio/first.mp4" id='first' ref={firstRef}></audio>
            <audio src="audio/second.mp4" id='second' ref={secondRef}></audio>
            <audio src="audio/third.mp4" id='third' ref={thirdRef}></audio>
            <div className={styles.MainText}>
                This is Kenny, you have to help us, this company is not as it seems. <br></br>
                Unpaid workers, use of copyright material, weird experiments with AI, all of these seem to be going on underneath the surface. <br></br>
                You need to help us get word out, login with the admin username and password back in the original introduction page to access all of their unscrupulous doings and show it to the world. <br></br>
                All that I could do is to drop hints for you before they would find out. Please, free the rest as soon as possible before it is too late. <br></br>
            </div>
            <div className={styles.Questions}>
                What is the name of the dish invented in tijuana, Mexico? <br></br>
                How many letters are there in this dish? <br></br>
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