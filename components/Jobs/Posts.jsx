import { useEffect, useState } from "react";
import HospitalJobs from "./HospitalJobs";
import JobSubDetails from "./JobSubDetails";


function Posts({ jobs }) {
  //sum of posts for total job postings

  const [searched, setSearched] = useState([]);
  const [jobslist, setJobsList] = useState(jobs.jobs);

  let totalJobs = 0;
  jobslist.forEach((e) => (totalJobs += e.total_jobs_in_hospital));


useEffect(()=>{
console.log(jobslist)
}, [jobslist])


  const handleSort = (e) => {
    switch (e.target.id) {
      case "Location":
        if(e.target.value === "Asc"){
          let sorted= jobslist.slice().sort(function(a,b){
            return a.items[0].city > b.items[0].city ? 1:-1
          });
          setJobsList(sorted)
        }
        if(e.target.value === "Desc"){
          setJobsList(jobslist.slice().sort(function(a,b){
            return a.items[0].city  < b.items[0].city  ? 1:-1
          }))
        }
        if(e.target.value === "Remove"){
        console.log("remove")
         setJobsList(jobs.jobs)
        }
        break;
      case "Role":
        console.log("role");
        break;
      case "Department":
        console.log("department");
        break;
      case "Education":
        console.log("education");
        break;
      case "Experience":
        console.log("experience");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div>
        <p>{totalJobs} job postings</p>
      </div>
      <div>
        <h3>Sort by</h3>
        <select id="Location" onChange={handleSort}>
          <option defaultValue>
            {" "}
            Location{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Role" onChange={handleSort}>
          <option defaultValue>
            {" "}
            Role{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Department" onChange={handleSort}>
          <option defaultValue>
            {" "}
            Department{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Education" onChange={handleSort}>
          <option defaultValue>
            {" "}
            Education{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Experience" onChange={handleSort}>
          <option defaultValue>
            {" "}
            Experience{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
      </div>
      <div>
        
        {searched.length > 0? searched.map((job)=>{
          return(
            <div key={job.key}>
            <JobSubDetails  details={job}/>
            </div>
          )
        }) :
        jobslist ? (
          jobslist.map((e) => {
            return(
              <div key={e.name}>
                <HospitalJobs data={e} />
              </div>
            ) 
          })) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default Posts;
