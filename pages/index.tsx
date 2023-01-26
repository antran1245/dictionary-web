import Heading from './Heading'
import styles from '../styles/Home.module.css'
import logo from '../assets/images/logo.svg'
import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container}>
      <Heading />
      <div id='settingBar'>
        <Image src={logo} alt="logo" width={32} height={36.5} />
        <div id='setting'>
          <select>
            <option value="">Sans Serif</option>
            <option value="">Serif</option>
            <option value="">Mono</option>
          </select>
        </div>
      </div>
    </div>
  )
}
