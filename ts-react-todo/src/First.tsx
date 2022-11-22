import React from "react";

type value = {
  child: string
}

const First = ({child}: value) => {
  return(
    <div className="todotemplate">
    <div className="title">일정 관리</div>
    <div className="content">{child}</div>
  </div>
  )
}

export default First