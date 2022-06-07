function Experience({ filters, FilterFunction }) {
  //filter experience
  return (
    <div>
      <h3>EXPERIENCE</h3>
      {filters.experience.map((e) => {
        return (
          <div key={e.key} onClick={()=>FilterFunction("experience", e.key)}>
            {" "}
            <div>
              <a>{e.key}</a> {e.doc_count}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
