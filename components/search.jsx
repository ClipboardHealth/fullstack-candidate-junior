import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css";

function SearchBar() {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div className={styles.main}>
      <input
        className={styles.input}
        placeholder="Search for any job, title, keywords or company"
        onChange={(e) => setInput(e.target.value.toLowerCase())}
      ></input>
    </div>
  );
}

export default SearchBar;
