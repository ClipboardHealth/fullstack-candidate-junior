import { useState } from "react";

function JobSubDetails({ details }) {
  //dates to know how many weeks have passed
  const date1 = new Date(details.created).getTime();
  const date2 = new Date().getTime();
  const diff = date2 - date1;
  const weeksPassed = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

  const [showDetails, setShowDetails] = useState(false);

  const deptos = details.department.join(", ");

  const handleOnClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="my-4">
      <div className="text-sm flex justify-between" onClick={handleOnClick}>
        <div>
          <a>
            <h4 className="font-bold">{details.job_title}</h4>
          </a>
          <div>
            <p>
              {details.work_schedule} | ${details.salary_range[0]} - $
              {details.salary_range[1]} an hour | {details.city}
            </p>
          </div>
        </div>
        <div>
          {" "}
          <p>{weeksPassed} weeks ago</p>
        </div>
      </div>
      {showDetails ? (
        <div className="grid grid-cols-4 text-sm  py-8">
          <div className="font-bold">
            <h4>Departments:</h4>
            <br></br>
            <h4>Hours/shifts:</h4>
            <h4>Summary:</h4>
          </div>
          <div className="pl-10 col-span-2">
            <p>{deptos}</p>
            <p>
              {details.hours[0]} hours / {details.work_schedule}
            </p>
            <p>{details.description}</p>
          </div>
          <div className="text-right">
            <button className="w-6/12 m-2 bg-sky-400 mt-0.5 p-1 px-1 rounded-lg text-white">
              Job Details
            </button>
            <button className="w-6/12 m-2 bg-white  mt-0.5 p-1 px-1 border border-sky-400 rounded-lg text-sky-400">
              Save job
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default JobSubDetails;
