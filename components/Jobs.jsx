import JobType from "./Jobs/JobType";
import Department from "./Jobs/Department";
import WorkSchedule from "./Jobs/WorkSchedule";
import Experience from "./Jobs/Experience";
import Posts from "./Jobs/Posts";
import FilterBar from "./Jobs/FilterBar";
import SearchBar from "../components/search";
import { useState } from "react";

export default function Jobs({ jobs, filters }) {
  const jobsBackup = jobs.jobs;
  const [hospitalList, setHospitalList] = useState(jobsBackup);
  const [jobsList, setJobsList] = useState([]);


  //búsqueda por job title o por hospital
  const searchFunction = (input) => {
    if (input.length > 0) {
      let hospitalResult = jobsBackup.filter((hospital) =>
        hospital.name.toLowerCase().includes(input)
      );

      if (hospitalResult.length === 0) {
        let result = [];
        jobsBackup.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            if (hospital.items[i].job_title.toLowerCase().includes(input))
              result.push(hospital.items[i]);
          }
        });
        setJobsList(result);
      } else {
        setHospitalList(hospitalResult);
      }
    } else {
      setJobsList([]);
      setHospitalList(jobsBackup);
    }
  };


//filtra categorías como depto o job type
  const FilterFunction = (type, filter) => {
    let result = [];
    switch (type) {
      case "job type":
        jobsBackup.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            if (
              hospital.items[i].job_type.toLowerCase() === filter.toLowerCase()
            )
              result.push(hospital.items[i]);
          }
        });
        setJobsList(result);
        break;
      case "department":
        jobsBackup.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            for (let j = 0; j < hospital.items[i].department.length; j++) {
              if (
                hospital.items[i].department[j].toLowerCase() ===
                filter.toLowerCase()
              )
                result.push(hospital.items[i]);
            }
          }
        });
        setJobsList(result);
        break;
      case "work schedule":
        jobsBackup.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            if (
              hospital.items[i].work_schedule.toLowerCase() ===
              filter.toLowerCase()
            )
              result.push(hospital.items[i]);
          }
        });
        setJobsList(result);
        break;
      case "experience":
        jobsBackup.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            if (
              hospital.items[i].experience.toLowerCase() ===
              filter.toLowerCase()
            )
              result.push(hospital.items[i]);
          }
        });
        setJobsList(result);
        break;

      default:
        break;
    }
  };

  //funcion de ordenamiento.
  const SortFunction = (type, sort) => {
  let ordered=[];
    switch (type) {
      case "Location":
        if (sort === "Asc") {
          ordered = [...jobsList].sort((a, b) =>
            a.location > b.location ? 1 : -1
          );      
        }
        if (sort === "Desc") {
          ordered = [...jobsList].sort((a, b) =>
            a.location < b.location ? 1 : -1
          );
        } 
        setJobsList(ordered);
        break;
      case "Role":          
      if (sort === "Asc") {
        ordered = [...jobsList].sort((a, b) =>
          a.job_title > b.job_title ? 1 : -1
        );      
      }
      if (sort === "Desc") {
        ordered = [...jobsList].sort((a, b) =>
          a.job_title < b.job_title ? 1 : -1
        );
      } 
      setJobsList(ordered);
        break;

      case "Department":
        if (sort === "Asc") {
          ordered = [...jobsList].sort((a, b) =>
            a.department[0] > b.department[0]? 1 : -1
          );      
        }
        if (sort === "Desc") {
          ordered = [...jobsList].sort((a, b) =>
            a.department[0]< b.department[0] ? 1 : -1
          );
        } 
        setJobsList(ordered);
        break;
      case "Education":
        if (sort === "Asc") {
          ordered = [...jobsList].sort((a, b) =>
            a.required_credentials[0] > b.required_credentials[0]  ? 1 : -1
          );      
        }
        if (sort === "Desc") {
          ordered = [...jobsList].sort((a, b) =>
            a.required_credentials[0]  < b.required_credentials[0]  ? 1 : -1
          );
        } 
        setJobsList(ordered);
        break;
      case "Experience":
        if (sort === "Asc") {
          ordered = [...jobsList].sort((a, b) =>
            a.experience > b.experience ? 1 : -1
          );      
        }
        if (sort === "Desc") {
          ordered = [...jobsList].sort((a, b) =>
            a.experience < b.experience ? 1 : -1
          );
        } 
        setJobsList(ordered);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <SearchBar searchFunction={searchFunction} />
      <div className="flex flex-row text-left">
        <div className="w-1/5">
          <JobType filters={filters} FilterFunction={FilterFunction} />
          <Department filters={filters} FilterFunction={FilterFunction} />
          <WorkSchedule filters={filters} FilterFunction={FilterFunction} />
          <Experience filters={filters} FilterFunction={FilterFunction} />
        </div>
        <div className="m-6 p-4 bg-white border border-solid border-neutral-200 w-full">
          <FilterBar
            hospitals={hospitalList}
            searched={jobsList}
            SortFunction={SortFunction}
          />
          <Posts hospitals={hospitalList} searched={jobsList} />
        </div>
      </div>
    </div>
  );
}
