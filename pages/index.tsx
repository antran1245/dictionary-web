import React, { useState } from 'react'
import Image from 'next/image'
import Heading from './components/Heading'
import Setting from './components/Setting'
import magnifyingGlass from '../assets/images/icon-search.svg'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [mode, setMode] = useState<boolean>(false)
  const [text, setText] = useState<string>('Sans Serif')
  const [search, setSearch] = useState<{ word: string, error: boolean }>({ word: "", error: false })

  const searchWord = () => {
    if (search.word === "") {
      setSearch({ word: "", error: true })
    } else {
      console.log(search.word)
    }
  }
  return (
    <div className={styles.container} data-color-mode={`${mode ? 'dark' : 'light'}`} text-mode={text || 'Sans Serif'}>
      <div>
        <Heading />
        <Setting mode={mode} setMode={setMode} text={text} setText={setText} />
        <div className={`${styles.searchBar} ${(search.error ? styles.searchError : '')}`}>
          <input type={"text"} placeholder="Search for any word..." value={search.word || ""} onChange={(e) => setSearch({ word: e.target.value, error: false })} />
          <Image src={magnifyingGlass} alt="magnifyingGlass" width={15.55} height={15.55} className={styles.magnifyingGlass} onClick={() => searchWord()} />
        </div>
        <p className={`${search.error ? styles.error : styles.errorMessage}`}>Whoops, can&#8217;t be empty…</p>
      </div>
    </div>
  )
}
