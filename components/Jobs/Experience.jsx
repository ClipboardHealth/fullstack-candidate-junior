import React from "react";

function Experience({filters}) {
  //filter experience
  return (
    <div>
      <h3>EXPERIENCE</h3>
      {filters.experience.map(e=>{
      return<p key={e.key}><a>{e.key}</a> {e.doc_count}</p>
    } )}
    </div>
  );
}

export default Experience;
