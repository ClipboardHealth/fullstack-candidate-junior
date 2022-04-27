import { useState } from "react";
import JobSubDetails from "./JobSubDetails";

function HospitalJobs({ data }) {

  const [showList, setShowList] = useState(false);
  const handleOnClickHospital = (data) => {
    setShowList(!showList);
  };
  return (
    <>
      <p onClick={(t) => handleOnClickHospital(data.name)}>
        <button>
          { data.name.substring(0, 2).toUpperCase() }
        </button>{" "}
        {data.total_jobs_in_hospital} jobs for {data.name}
      </p>
      {showList ? (
        <div>
          {" "}
          {data.items.map((e) => {
            return (
                <JobSubDetails key={e.key} details={e}/>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default HospitalJobs;
