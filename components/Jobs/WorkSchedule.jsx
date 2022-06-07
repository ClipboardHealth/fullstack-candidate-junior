export default function WorkSchedule({filters, FilterFunction}) {

  return (
    <div>    
    <h3>WORK SCHEDULE</h3>
    {filters.work_schedule.map(e=>{
      return(
        <div key={e.key} onClick={()=>FilterFunction("work schedule", e.key)}> <a>{e.key}</a> {e.doc_count}</div>
      )
    } )}
    </div>
  )
}
