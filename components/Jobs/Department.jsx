import React from 'react'

function Department({filters}) {

  const top= filters.department.slice(0,9);
  return (
      <>
    <h3>DEPARTMENT</h3>
    {top.map(e=>{
      return(
        <p> <a>{e.key}</a> {e.doc_count}</p>
      )
    } )}
    <button>Show more</button>
    </>
  )
}

export default Department