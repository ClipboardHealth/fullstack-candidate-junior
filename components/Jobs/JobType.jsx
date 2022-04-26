import React from 'react'

function JobType({filters}) {
  return (
    <div>
    <h3>JOB TYPE</h3>
    {filters.job_type.map(e=>{
      return <p><a>{e.key}</a> {e.doc_count}</p>
    } )}
  </div>
  )
}

export default JobType