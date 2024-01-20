"use client"

import styles from '@/app/rbgo/rbgo.module.css';
import { useRef } from 'react';
import React from 'react';
import Image from "next/image";

export default function Page() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function checkCredentials() {
        const name = usernameRef.current!.value;
        var password = passwordRef.current!.value;
        if ((name === "Kenny") && (password === '9235')) {
            window.location.href = "/etyu"
        }
        else if ((name === 'Philip') && (password === '7264')) {
            window.location.href = '/pvbw'
        }
        else {
            document.getElementById('Reject')!.style.display = 'block'
        }
    }
    return (
        <main>
            <div className={styles.MainText}>
                <p className={styles.header}>
                Welcome to Artifex. 
                </p>
                <p>
                I am Kenny, a staff member working here,  and I will be guiding you in using this website as well as the standard do&apos;s and don&apos;ts of this company. 
                </p>
                Artifex is at the forefront of AI technology and we strive to provide a better quality of life to all users. We mainly focus on AI chatbots where users are able to ask various questions and receive the corresponding feedback.
                All staff will have their own individual accounts which you can login via this page. 
                Username do leave it as your own name for easier recognition and for password, only four numerical numbers are allowed to be used.
                Do&apos;s and Don&apos;ts
                All staff members are required to stay on the intranet servers at all times while working
                All staff members are not allowed to disclose any form of work that was done while working.
                All staff members are not to disclose any of their own credentials to a third party.
                Blah blah
                Now once again, we wish that you will work harder to not just contribute to this company, but to the betterment of mankind. 
            </div>

            <div className={styles.InputField}>
                <div className={styles.username}>
                    <input type="text" ref={usernameRef} placeholder='Enter your username'></input>
                </div>

                <div className={styles.password}>
                    <input type="text" id="fpassword" ref={passwordRef} placeholder='Enter your password'></input>
                </div>

                <div className={styles.Rejected} id = "Reject">
                    Incorrect Credentials
                </div>

                <div>
                    <button onClick={checkCredentials} className={styles.mainButton}>
                        Submit
                    </button>
                </div>
            </div>
            <div className={styles.red}> 
                <Image
                src="/red.png"
                alt=""
                height={0}
                width={400}>
                </Image>
            </div>
            <div className={styles.blue}>
                <Image
                src="/blue.jpeg"
                alt=""
                height={0}
                width={400}>
                </Image>
            </div>
            <div className={styles.green}>
                <Image
                src="/green.jpeg"
                alt=""
                height={0}
                width={400}>
                </Image>
            </div>
            <div className={styles.orange}>
                <Image
                src="/orange.jpg"
                alt=""
                height={0}
                width={400}>
                </Image>
            </div>
        </main>
    );
}