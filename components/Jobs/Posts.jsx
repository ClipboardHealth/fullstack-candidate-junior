import HospitalJobs from "../HospitalJobs";

function Posts({ jobs }) {
  let totalJobs = 0;
  jobs.jobs.forEach((e) => (totalJobs += e.total_jobs_in_hospital));

  return (
    <>
      <div>
        <p>{totalJobs} job postings</p>
      </div>
      <div>
        <h3>Sort by</h3>
        <select id="Location">
          <option disabled selected value>
            {" "}
            Location{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Role">
          <option disabled selected value>
            {" "}
            Role{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Department">
          <option disabled selected value>
            {" "}
            Department{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Education">
          <option disabled selected value>
            {" "}
            Education{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Experience">
          <option disabled selected value>
            {" "}
            Experience{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
      </div>
      <div>
        {jobs.jobs ? (
          jobs.jobs.map((e) => {
            return (
                <HospitalJobs data= {e}/>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default Posts;
