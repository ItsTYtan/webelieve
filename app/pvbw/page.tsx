"use client"

import styles from '@/app/pvbw/pvbw.module.css';
import { useRef } from 'react';

export default function Page() {
    return(
        <main>
            <div>
                <img src='email.png'></img>
            </div>
            <div className={styles.text}> 
                It has been done
            </div>
        </main>
    )
}
