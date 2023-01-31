import { useState } from 'react'
import Heading from './components/Heading'
import styles from '../styles/Home.module.css'
import Setting from './components/Setting'

export default function Home() {
  const [mode, setMode] = useState<boolean>(false)
  const [text, setText] = useState<string>('Sans Serif')
  return (
    <div className={styles.container} data-color-mode={`${mode ? 'dark' : 'light'}`} text-mode={text || 'Sans Serif'}>
      <div>
        <Heading />
        <Setting mode={mode} setMode={setMode} text={text} setText={setText} />
      </div>
    </div>
  )
}
