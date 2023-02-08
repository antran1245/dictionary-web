import styles from '../../styles/NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.found}>
      <span>&#128533;</span>
      <h3>No Definitions Found</h3>
      <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}