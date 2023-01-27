import Heading from './Heading'
import logo from '../assets/images/logo.svg'
import moon from '../assets/images/icon-moon.svg'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Heading />
      <div id='settingBar'>
        <Image src={logo} alt="logo" width={32} height={36.5} />
        <div id='setting'>
          <div className={styles.dropdown}>
            <select>
              <option value="">Sans Serif</option>
              <option value="">Serif</option>
              <option value="">Mono</option>
            </select>
            <span>&#x2304;</span>
          </div>
          <div>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
            <Image src={moon} alt="moon" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
