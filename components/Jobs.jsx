import JobType from "./Jobs/JobType";
import Department from "./Jobs/Department";
import WorkSchedule from "./Jobs/WorkSchedule";
import Experience from "./Jobs/Experience";
import Posts from "./Jobs/Posts";
import styles from './Jobs.module.css';

export default function Jobs({ jobs, filters }) {
  return (
    <div className={styles.main}>
      <div>
        <JobType filters={filters} />
        <Department filters={filters} />
        <WorkSchedule filters={filters} />
        <Experience filters={filters} />
      </div>
      <div>
        <Posts jobs= {jobs}/>
      </div>
    </div>
  );
}
