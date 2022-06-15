
function FilterBar({ hospitals, searched, SortFunction }) {

//sum of posts for total job postings
  let totalJobs = 0;
  searched.length > 0 ? totalJobs= searched.length
  :hospitals.forEach((e) => (totalJobs += e.total_jobs_in_hospital));

  return (
    <div className="flex flex-row justify-between py-8 text-sm">
    <div className="flex">
        <p className="mr-2 font-bold">{totalJobs.toLocaleString('en-US')} </p>
        <p>job postings</p>
      </div>
      <div className="flex justify-evenly">
        <h3 className="text-neutral-400 mr-2">Sort by</h3>
        <select className="mx-2" id="Location" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            Location
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select className="mx-2" id="Role" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            Role
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select className="mx-2" id="Department" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            Department
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select className="mx-2" id="Education" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            Education
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
        <select className="mx-2" id="Experience" onChange={(e)=> SortFunction(e.target.id, e.target.value)}>
          <option defaultValue>
            Experience
          </option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Remove">Remove</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar