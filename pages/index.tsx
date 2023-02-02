import { useState } from 'react'
import Image from 'next/image'
import Heading from './components/Heading'
import Setting from './components/Setting'
import magnifyingGlass from '../assets/images/icon-search.svg'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [mode, setMode] = useState<boolean>(false)
  const [text, setText] = useState<string>('Sans Serif')
  return (
    <div className={styles.container} data-color-mode={`${mode ? 'dark' : 'light'}`} text-mode={text || 'Sans Serif'}>
      <div>
        <Heading />
        <Setting mode={mode} setMode={setMode} text={text} setText={setText} />
        <div className={styles.searchBar}>
          <input type={"text"} placeholder="Search for any word..." />
          <Image src={magnifyingGlass} alt="magnifyingGlass" width={15.55} height={15.55} className={styles.magnifyingGlass} />
        </div>
      </div>
    </div>
  )
}
