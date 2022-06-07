function Department({ filters, FilterFunction }) {
  //filter departments
  const top = filters.department.slice(0, 10);
  return (
    <>
      <h3>DEPARTMENT</h3>
      {top.map((e) => {
        return (
          <div key={e.key} onClick={() => FilterFunction("department", e.key)}>
            <div>
              {" "}
              <a>{e.key}</a> {e.doc_count}
            </div>
          </div>
        );
      })}
      <button>Show more</button>
    </>
  );
}

export default Department;
