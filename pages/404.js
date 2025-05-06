import React from 'react'
import styles from './404.module.css'
import './global.css'
import Link from 'next/link'
import Head from 'next/head'

export default function pages404() {
    return (
        <>
            <Head>
                <title>Gdmenu | Not Found</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.man1}>
                        <img className={styles.man1Anim} src="/img/notfound/man_01.png" alt="" />
                    </div>
                    <div className={styles.man2}>
                        <img className={styles.man2Anim} src="/img/notfound/man_02.png" alt="" />
                    </div>
                    <div className={styles.errorContent}>
                        <h1 className={styles.text}>404</h1>
                        <h3 className={styles.subtitle}>Page Not Found</h3>
                        <Link className={styles.button} href='/'>Go Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
