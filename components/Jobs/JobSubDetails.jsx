import { useState } from "react";

function JobSubDetails({ details }) {

  //dates to know how many weeks have passed
  const date1 = new Date(details.created).getTime();
  const date2 = new Date().getTime();
  const diff = date2 - date1;
  const weeksPassed = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));


  const [showDetails, setShowDetails] = useState(false);

  const deptos = details.department.join(', ');

  const handleOnClick = () => {
    setShowDetails(!showDetails);
  };


  return (
    <>
      <div onClick={handleOnClick}>
        <a>
          <h4>{details.job_title}</h4>
        </a>
        <div>
          <p>
            {details.work_schedule} | ${details.salary_range[0]} - $
            {details.salary_range[1]} an hour | {details.city}
          </p>
          <p>{weeksPassed} weeks ago</p>
        </div>
      </div>
      {showDetails ?
       <div>
          <div>
              <h4>Departments:</h4>
              <p>{deptos}</p>
              <h4>Hours/shifts:</h4>
              <p>{details.hours[0]} hours / {details.work_schedule}</p>
              <h4>Summary:</h4>
              <p>{details.description}</p>
              <button>Job Details</button>
              <button>Save job</button>
          </div>
      </div> : null}
    </>
  );
}

export default JobSubDetails;
