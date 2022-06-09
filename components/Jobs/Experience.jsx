function Experience({ filters, FilterFunction }) {
  //filter experience
  return (
    <div className="m-6 p-4 bg-white border border-solid border-neutral-200">
      <h3 className="mb-3 font-bold text-sm tracking-tighter">EXPERIENCE</h3>
      {filters.experience.map((e) => {
        return (
          <div className="flex flex-row my-2 text-sm" key={e.key} onClick={()=>FilterFunction("experience", e.key)}>
            {" "}
            <div>
              <a>{e.key}</a> 
              <a className="mx-2 my-0.5 text-xs text-neutral-400">{e.doc_count.toLocaleString('en-US')} </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
