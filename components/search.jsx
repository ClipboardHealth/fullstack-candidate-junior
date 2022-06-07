import styles from "./search.module.css";

function SearchBar({searchFunction}) {
  return (
    <div className={styles.main}>
      <input
        className={styles.input}
        placeholder="Search for any job, title, keywords or company"
        onChange={(e) => searchFunction(e.target.value.toLowerCase())}
      ></input>
    </div>
  );
}

export default SearchBar;
