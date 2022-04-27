import React from 'react'

function JobType({filters}) {
  //filter job type
  return (
    <div>
    <h3>JOB TYPE</h3>
    {filters.job_type.map(e=>{
      return <p key={e.key}><a>{e.key}</a> {e.doc_count}</p>
    } )}
  </div>
  )
}

export default JobType