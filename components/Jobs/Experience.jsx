import React, { useEffect, useState } from "react";

function Experience({ filters }) {
  //filter experience
  const [search, setSearch] = useState('')

  const handleOnClick= (e) => {
    setSearch(e)
  }

  //on every update, dispatch action
  useEffect(()=> {
    console.log(search)
  }, [search])

  return (
    <div>
      <h3>EXPERIENCE</h3>
      {filters.experience.map((e) => {
        return (
          <div key={e.key} onClick={(t)=>handleOnClick(e.key)}>
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
