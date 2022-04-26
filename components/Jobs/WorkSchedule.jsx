import React from 'react'

export default function WorkSchedule({filters}) {
  return (
    <div>    
    <h3>WORK SCHEDULE</h3>
    {filters.work_schedule.map(e=>{
      return(
        <p> <a>{e.key}</a> {e.doc_count}</p>
      )
    } )}
    </div>
  )
}
