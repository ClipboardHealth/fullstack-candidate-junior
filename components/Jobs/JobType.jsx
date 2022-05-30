import React, { useEffect, useState } from 'react'

function JobType({filters}) {
  //filter job type
  const [search, setSearch] = useState('');

  const handleOnClick = (jobtype) => {
    setSearch(jobtype)
  }

  useEffect(()=> {
    console.log(search)
  }, [search])
  return (
    <div>
    <h3>JOB TYPE</h3>
    {filters.job_type.map(e=>{
      return <div key={e.key} onClick={()=>handleOnClick(e.key)}><a>{e.key}</a> {e.doc_count}</div>
    } )}
  </div>
  )
}

export default JobType