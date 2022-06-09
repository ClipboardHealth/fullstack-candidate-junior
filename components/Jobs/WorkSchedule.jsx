export default function WorkSchedule({ filters, FilterFunction }) {
  return (
    <div className="m-6 p-4 bg-white border border-solid border-neutral-200">
      <h3 className="mb-3 font-bold text-sm tracking-tighter">WORK SCHEDULE</h3>
      {filters.work_schedule.map((e) => {
        return (
          <div
            className="flex flex-row my-2 text-sm"
            key={e.key}
            onClick={() => FilterFunction("work schedule", e.key)}
          >
            {" "}
            <a>{e.key}</a> 
            <a className="mx-2 my-0.5 text-xs text-neutral-400">{e.doc_count.toLocaleString('en-US')}</a>
          </div>
        );
      })}
    </div>
  );
}
