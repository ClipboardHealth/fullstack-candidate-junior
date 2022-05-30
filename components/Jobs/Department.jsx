import React, { useEffect, useState } from "react";

function Department({ filters }) {
  //filter departments
  const top = filters.department.slice(0, 10);
  const [search, setSearch] = useState("");

  const handleOnClick = (key) => {
    setSearch(key);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <h3>DEPARTMENT</h3>
      {top.map((e) => {
        return (
          <div key={e.key} onClick={(t) => handleOnClick(e.key)}>
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
