import { useState } from "react";
import JobSubDetails from "./JobSubDetails";

function HospitalJobs({ data }) {

  const [showList, setShowList] = useState(false);
  const handleOnClickHospital = () => {
    setShowList(!showList);
  };
  return (
    <>
      <div className="text-sm py-1.5" onClick={() => handleOnClickHospital()}>
        <button className="w-8 m-2 bg-neutral-400 mt-0.5 p-0.5 px-1 rounded-lg text-white text-base font-semibold">
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
