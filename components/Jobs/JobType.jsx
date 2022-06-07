function JobType({ filters, FilterFunction }) {
  //filter job type
  return (
    <div>
      <h3>JOB TYPE</h3>
      {filters.job_type.map((e) => {
        return (
          <div key={e.key} onClick={() => FilterFunction("job type", e.key)}>
            <a>{e.key}</a> {e.doc_count}
          </div>
        );
      })}
    </div>
  );
}

export default JobType;
