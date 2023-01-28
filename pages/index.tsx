import { useState } from 'react'
import Heading from './components/Heading'
import styles from '../styles/Home.module.css'
import Setting from './components/Setting'

export default function Home() {
  const [mode, setMode] = useState<boolean>(false)
  return (
    <div className={styles.container} data-color-mode={`${mode ? 'dark' : 'light'}`}>
      <div>
        <Heading />
        <Setting mode={mode} setMode={setMode} />
      </div>
    </div>
  )
}
