import styles from './Footer.module.css'
function Footer() {
  return (
    <div className={styles.main}>
      <div>
        <h3>About us</h3>
        <p>We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
        <p>All copyrights reserved © 2020 -Health Explore </p>
      </div>
      <div className={styles.column}>
        <h3>Sitemap</h3>
        <a>Nurses</a>
        <a>Employers</a>
        <a>Social networking</a>
        <a>Jobs</a>
      </div>
      <div className={styles.column}>
        <h3>Privacy</h3>
        <a>Terms of use</a>
        <a>Provacy policy</a>
        <a>Cookie policy</a>
        </div>
    </div>
  );
}

export default Footer;
