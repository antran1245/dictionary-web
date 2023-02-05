import { Data } from "../../context/DictionaryType"
import play_button from '../../assets/images/icon-play.svg'
import styles from '../../styles/Word.module.css'
import Image from "next/image";

interface WordProps {
  word: Data | null;
}

export default function Word({ word }: WordProps) {
  if (word) {
    return (
      <div className={styles.content}>
        <div className={styles.wordHeader}>
          <div>
            <h1 className={styles.title}>{word.word}</h1>
            <p className={styles.phonetic}>{word.phonetic || word.phonetics[word.phonetics.length - 1].text}</p>
          </div>
          <Image src={play_button} alt="play button" width={75} height={75} />
        </div>
      </div>
    )
  }
  return (
    <div>Search for a word</div>
  )
}