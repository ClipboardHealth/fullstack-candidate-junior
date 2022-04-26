import React from "react";

function Experience({filters}) {
  return (
    <div>
      <h3>EXPERIENCE</h3>
      {filters.experience.map(e=>{
      return<p><a>{e.key}</a> {e.doc_count}</p>
    } )}
    </div>
  );
}

export default Experience;
