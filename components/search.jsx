import styles from './search.module.css'
function SearchBar() {
  return (
    <div className={styles.main}>
    <input className={styles.input} placeholder="Search for any job, title, keywords or company"></input>
    </div>
  )
}

export default SearchBar