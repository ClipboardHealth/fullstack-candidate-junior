function Department({ filters, FilterFunction }) {
  //filter departments
  const top = filters.department.slice(0, 10);
  return (
    <div className="m-6 p-4 bg-white border border-solid border-neutral-200">
      <h3 className="mb-3 font-bold text-sm tracking-tighter">DEPARTMENT</h3>
      {top.map((e) => {
        return (
          <div className="flex flex-row my-2 text-sm" key={e.key} onClick={() => FilterFunction("department", e.key)}>
            <div>
              {" "}
              <a>{e.key}</a>
              <a className="mx-2 my-0.5 text-xs text-neutral-400"> {e.doc_count.toLocaleString('en-US')}</a>
            </div>
          </div>
        );
      })}
      <button className="text-sm text-sky-500">Show more</button>
    </div>
  );
}

export default Department;
