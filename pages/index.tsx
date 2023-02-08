import React, { useState } from 'react'
import Image from 'next/image'
import Heading from './components/Heading'
import Setting from './components/Setting'
import Word from './components/Word'
import NotFound from './components/NotFound'
import magnifyingGlass from '../assets/images/icon-search.svg'
import styles from '../styles/Home.module.css'
import { Data } from '../context/DictionaryType'

export default function Home() {
  const [mode, setMode] = useState<boolean>(false)
  const [text, setText] = useState<string>('Sans Serif')
  const [search, setSearch] = useState<{ word: string, error: boolean, found: boolean }>({ word: "", error: false, found: true })
  const [word, setWord] = useState<Data | null>(null)

  /**
   * Search for the word.
   * If input is blank, error handling on the search bar and error message.
   */
  const searchWord = () => {
    if (search.word === "") {
      setSearch({ word: "", error: true, found: true })
    } else {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search.word}`)
        .then(resp => resp.json())
        .then(data => {
          if (!('title' in data)) {
            setWord(data[0])
            setSearch({ ...search, found: true })
          } else {
            setWord(null)
            setSearch({ ...search, found: false })
          }
        })
        .catch(() => console.log('Error'))
    }
  }

  /**
   * Search an entered word by pressing the enter key instead of clicking the magnifying glass.
   * @param e -> Get the key press
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchWord()
    }
  }
  return (
    <div className={styles.container} data-color-mode={`${mode ? 'dark' : 'light'}`} text-mode={text || 'Sans Serif'}>
      <div>
        <Heading />
        <Setting mode={mode} setMode={setMode} text={text} setText={setText} />
        <div className={`${styles.searchBar} ${(search.error ? styles.searchError : '')}`}>
          <input type={"text"} placeholder="Search for any word..." value={search.word || ""} onChange={(e) => setSearch({ ...search, word: e.target.value })} onKeyDown={(e) => handleKeyDown(e)} />
          <Image src={magnifyingGlass} alt="magnifyingGlass" width={15.55} height={15.55} className={styles.magnifyingGlass} onClick={() => searchWord()} />
        </div>
        <p className={`${search.error ? styles.error : styles.errorMessage}`}>Whoops, can&#8217;t be empty…</p>
        {search.found ?
          <Word word={word} /> : <NotFound />
        }
      </div>
    </div>
  )
}
