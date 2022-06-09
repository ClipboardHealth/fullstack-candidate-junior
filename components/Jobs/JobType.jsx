function JobType({ filters, FilterFunction }) {
  //filter job type
  return (
    <div className="m-6 p-4 bg-white border border-solid border-neutral-200">
      <h3 className="mb-3 font-bold text-sm tracking-tighter">JOB TYPE</h3>
      {filters.job_type.map((e) => {
        return (
          <div className="flex flex-row my-2 text-sm" key={e.key} onClick={() => FilterFunction("job type", e.key)}>
            <a>{e.key}</a> 
            <a className="mx-2 my-0.5 text-xs text-neutral-400"> {e.doc_count.toLocaleString('en-US')}</a>
          </div>
        );
      })}
    </div>
  );
}

export default JobType;
