import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import moon from '../../assets/images/icon-moon.svg'
import arrow from '../../assets/images/icon-arrow-down.svg'
import styles from '../../styles/Setting.module.css'

type SettingProps = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Setting({ mode, setMode, text, setText }: SettingProps) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className={styles.settingBar}>
      <Image src={logo} alt="logo" width={32} height={36.5} />
      <div className={styles.setting}>
        <div className={styles.dropdown}>
          <p onClick={() => setShow(!show)}>{text}</p>
          <Image src={arrow} alt="arrow" width={12} height={6} />
          <div className={styles.select} style={{ display: show ? 'block' : 'none' }}>
            <p className={styles.sans} onClick={() => setText('Sans Serif')}>Sans Serif</p>
            <p className={styles.serif} onClick={() => setText('Serif')}>Serif</p>
            <p className={styles.mono} onClick={() => setText('Mono')}>Mono</p>
          </div>
        </div>
        <span>&#x2502;</span>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" onChange={() => setMode(!mode)} checked={mode} />
            <span className={styles.slider}></span>
          </label>
          <Image src={moon} alt="moon" className={mode ? styles.moon : ""} width={20} height={20} />
        </div>
      </div>
    </div>
  )
}