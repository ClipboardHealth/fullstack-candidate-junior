
function FilterBar({ hospitals, searched, SortFunction }) {

//sum of posts for total job postings
  let totalJobs = 0;
  searched.length > 0 ? totalJobs= searched.length
  :hospitals.forEach((e) => (totalJobs += e.total_jobs_in_hospital));

  return (
    <>
    <div>
        <p>{totalJobs} job postings</p>
      </div>
      <div>
        <h3>Sort by</h3>
        <select id="Location" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            {" "}
            Location{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Role" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            {" "}
            Role{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Department" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            {" "}
            Department{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Education" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            {" "}
            Education{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select id="Experience" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            {" "}
            Experience{" "}
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
      </div>
    </>
  )
}

export default FilterBar