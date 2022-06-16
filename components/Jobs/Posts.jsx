import HospitalJobs from "./HospitalJobs";
import JobSubDetails from "./JobSubDetails";

function Posts({ hospitals, searched }) {
  return (
    <>
      <div>
        {searched.length > 0 ? (
          searched.map((job) => {
            return (
              <div key={job.key}>
                <hr />
                <JobSubDetails details={job} />
              </div>
            );
          })
        ) : hospitals ? (
          hospitals.map((e) => {
            return (
              <div key={e.name}>
                <HospitalJobs data={e} />
              </div>
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
