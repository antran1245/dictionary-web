import logo from '../../assets/images/logo.svg'
import moon from '../../assets/images/icon-moon.svg'
import Image from 'next/image'
import styles from '../../styles/Setting.module.css'
import React from 'react'

type SettingProps = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Setting({ mode, setMode }: SettingProps) {
  return (
    <div className={styles.settingBar}>
      <Image src={logo} alt="logo" width={32} height={36.5} />
      <div className={styles.setting}>
        <div className={styles.dropdown}>
          <select>
            <option value="">Sans Serif</option>
            <option value="">Serif</option>
            <option value="">Mono</option>
          </select>
          <span>&#x2304;</span>
        </div>
        <span>&#x2502;</span>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
          <Image src={moon} alt="moon" width={20} height={20} onClick={() => setMode(!mode)} />
        </div>
      </div>
    </div>
  )
}