import React from 'react'
import './global.css'
import styles from './signin.module.css'
import Link from 'next/link'


export default function signin() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href='/' className={styles.backHome}>Back Home</Link>
                    <Link className={styles.logo} href='/'>
                        <img style={{ maxWidth: '142px' }} className={styles.image} src="/logo/gdmenulogowhite.svg" alt="" />
                    </Link>
                </div>
                <div className={styles.account}>
                    <div className={styles.accountBody}>
                        <h4 className='mt-8'>Welcome To Mosto</h4>

                        <form className={styles.accountForm} action="">
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="">Your Email</label>
                                <input className={styles.formInput} placeholder='Enter Your Email' type="text" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="">Password</label>
                                <input className={styles.formInput} placeholder='Enter Your Password' type="text" />
                                <span className={styles.signInRecovery}>
                                    Forgot your password?
                                    <Link href='javascript:;'> Recover Password</Link>
                                </span>
                            </div>
                            <div className={`${styles['formGroup']} ${styles['texCenter']}`}>
                                <button className={styles.submitButton} type='submit'>Sign In</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className={styles.or}>
                        <span>OR</span>
                    </div>
                    <div className={styles.accountHeader}>
                        <span>Sign up with your work email</span>
                        <Link className={styles.signInWith} href='javascript:;'>
                            <img src="" alt="icon" />
                            <span>Sign Up with Google</span>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
