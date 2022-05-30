import React, { useEffect, useState } from 'react'

export default function WorkSchedule({filters}) {

  const [search, setSearch] = useState("")

  const handleOnClick= (workschedule)=>{
  setSearch(workschedule);
  }

  useEffect(()=>{
    console.log(search)
  }, [search])

  return (
    <div>    
    <h3>WORK SCHEDULE</h3>
    {filters.work_schedule.map(e=>{
      return(
        <div key={e.key} onClick={()=>handleOnClick(e.key)}> <a>{e.key}</a> {e.doc_count}</div>
      )
    } )}
    </div>
  )
}
