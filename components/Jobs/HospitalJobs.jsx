import { useState } from "react";
import JobSubDetails from "./JobSubDetails";

function HospitalJobs({ data }) {

  const [showList, setShowList] = useState(false);
  const handleOnClickHospital = () => {
    setShowList(!showList);
  };
  return (
    <>
      <div onClick={() => handleOnClickHospital()}>
        <button>
          { data.name.substring(0, 2).toUpperCase() }
        </button>{" "}
        {data.total_jobs_in_hospital} jobs for {data.name}
      </div>
      {showList ? (
        <div>
          {" "}
          {data.items.map((e) => {
            return (
                <div key={Math.random(1000)}>
                <hr/>
                <JobSubDetails details={e}/>
                </div>
            )
          })}
        </div>
      ) : null}
    </>
  );
}

export default HospitalJobs;
