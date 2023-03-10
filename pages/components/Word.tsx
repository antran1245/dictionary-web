import { Data } from "../../context/DictionaryType"
import play_button from '../../assets/images/icon-play.svg'
import new_window from '../../assets/images/icon-new-window.svg'
import styles from '../../styles/Word.module.css'
import Image from "next/image";

interface WordProps {
  word: Data | null;
  searchByClick(word: string): void;
}

export default function Word({ word, searchByClick }: WordProps) {

  if (word && "word" in word) {
    const pronounceWord = () => {
      for (let i = 0; i < word.phonetics.length; i++) {
        if (word.phonetics[i].audio !== "") {
          let sound = new Audio(word.phonetics[i].audio)
          sound.volume = 1
          sound.play()
          break
        }
      }
    }

    return (
      <div className={styles.content}>
        <div className={styles.wordHeader}>
          <div>
            <h1 className={styles.title}>{word.word}</h1>
            <p className={styles.phonetic}>{word.phonetic || word.phonetics[word.phonetics.length - 1].text}</p>
          </div>
          <Image src={play_button} alt="play button" width={75} height={75} onClick={() => pronounceWord()} />
        </div>
        {word.meanings.map((item, index1) => {
          return <div key={index1}>
            <div className={styles.partOfSpeech}>
              <p>{item.partOfSpeech}</p>
              <div className={styles.horizontalLine} />
            </div>
            <p className={styles.meaning}>Meaning</p>
            {
              item.definitions.map((define, index2) => {
                return <div className={styles.meanings} key={index2}>
                  <ul className={styles.listing}>
                    <li>&#x2022;&#x2800;
                      <span>
                        <p className={styles.definition}>
                          {define.definition}
                        </p>
                        <p className={styles.example}>
                          {define.example?.length > 0 ? `"${define.example}"` : ""}
                        </p>

                        {/* Synonyms of the definition */}
                        <p className={styles.synonyms}>
                          {define.synonyms.length > 0 ? 'Synonyms' : ''}
                          {define.synonyms.map((synonym, index3) => {
                            return <span key={index3} className={styles.synonyms} onClick={() => searchByClick(synonym)}>
                              {synonym}
                            </span>
                          })}
                        </p>
                        <p className={styles.antonyms}>
                          {define.antonyms.length > 0 ? 'Antonyms' : ''}
                          {define.antonyms.map((antonym, index4) => {
                            return <span key={index4} className={styles.antonyms} onClick={() => searchByClick(antonym)}>
                              {antonym}
                            </span>
                          })}
                        </p>
                      </span>
                    </li>
                  </ul>
                </div>
              })
            }

            {/* Synonyms of the part of speech */}
            <p className={styles.synonyms}>
              {item.synonyms.length > 0 ? 'Synonyms' : ''}
              {item.synonyms.map((synonym, index3) => {
                return <span key={index3} className={styles.synonyms} onClick={() => searchByClick(synonym)}>
                  {synonym}
                </span>
              })}
            </p>
            <p className={styles.antonyms}>
              {item.antonyms.length > 0 ? 'Antonyms' : ''}
              {item.antonyms.map((antonym, index4) => {
                return <span key={index4} className={styles.antonyms} onClick={() => searchByClick(antonym)}>
                  {antonym}
                </span>
              })}
            </p>
          </div>
        })
        }
        <footer>
          <div className={styles.horizontalLine} />
          <div className={styles.sources}>
            <p>Source</p>
            {word.sourceUrls.map((item, index5) => {
              return <div className={styles.source} key={index5}>
                <a href={item}>{item}</a>
                <Image src={new_window} alt="new window icon" width={12} height={12} />
              </div>
            })}
          </div>
        </footer>
      </div>
    )
  }
  return (
    <div></div>
  )
}