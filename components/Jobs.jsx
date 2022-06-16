import JobType from "./Jobs/JobType";
import Department from "./Jobs/Department";
import WorkSchedule from "./Jobs/WorkSchedule";
import Experience from "./Jobs/Experience";
import Posts from "./Jobs/Posts";
import FilterBar from "./Jobs/FilterBar";
import SearchBar from "../components/search";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [hospitalList, setHospitalList] = useState(null);
  const [jobsList, setJobsList] = useState([]);
  const [filters, setFilters] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/filters")
      .then((res) => res.json())
      .then((filters) => {
        setFilters(filters);
      });
  }, []);

  useEffect(() => {
    fetchFunction();
  }, []);

  //trae todas los hospitales y sus trabajos
  const fetchFunction = () => {
    setLoading(true);
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((jobs) => {
        setHospitalList(jobs.jobs);
        const backup = jobs.jobs;
        setLoading(false);
      });
  };

  //filtra categorías como depto o job type
  const FilterFunction = (type, filter) => {
    setLoading(true);
    fetch(`/api/jobs/?${type}=${filter}`)
      .then((res) => res.json())
      .then((jobs) => {
        setJobsList(jobs);
        setLoading(false);
      });
  };

  //búsqueda por job title o por hospital
  const searchFunction = (input) => {
    if (input.length > 0) {
      if (hospitalList) {
        let hospitalResult = hospitalList.filter((hospital) =>
          hospital.name.toLowerCase().includes(input)
        );
        if (hospitalResult.length > 0) {
          setHospitalList(hospitalResult);
        } else {
          let result = [];
          hospitalList.forEach((hospital) => {
            for (let i = 0; i < hospital.items.length; i++) {
              if (hospital.items[i].job_title.toLowerCase().includes(input))
                result.push(hospital.items[i]);
            }
          });
          if(result.length>0) setJobsList(result)
          else setHospitalList(null);
        }
      }
    } else {
      setJobsList([]);
      fetchFunction();
    }
  };

  //funcion de ordenamiento.
  const SortFunction = (type, sort) => {
    let ordered = [];
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
            a.department[0] > b.department[0] ? 1 : -1
          );
        }
        if (sort === "Desc") {
          ordered = [...jobsList].sort((a, b) =>
            a.department[0] < b.department[0] ? 1 : -1
          );
        }
        setJobsList(ordered);
        break;
      case "Education":
        if (sort === "Asc") {
          ordered = [...jobsList].sort((a, b) =>
            a.required_credentials[0] > b.required_credentials[0] ? 1 : -1
          );
        }
        if (sort === "Desc") {
          ordered = [...jobsList].sort((a, b) =>
            a.required_credentials[0] < b.required_credentials[0] ? 1 : -1
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
        {filters ? (
          <div className="w-1/5">
            <JobType filters={filters} FilterFunction={FilterFunction} />
            <Department filters={filters} FilterFunction={FilterFunction} />
            <WorkSchedule filters={filters} FilterFunction={FilterFunction} />
            <Experience filters={filters} FilterFunction={FilterFunction} />
          </div>
        ) : null}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="m-6 p-4 bg-white border border-solid border-neutral-200 w-full">
            {hospitalList? (
              <div>
                <FilterBar
                  hospitals={hospitalList}
                  searched={jobsList}
                  SortFunction={SortFunction}
                />
                <Posts hospitals={hospitalList} searched={jobsList} />
              </div>
            ) : (
              <h1>No jobs found</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
