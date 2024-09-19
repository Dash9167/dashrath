import React from 'react'

 const Databases = ({data,percent,icon}) => {
  return (
    <div className="Database">
    <h3> <i className={icon}></i>{data}</h3>
    <div className="skilss-data">
      <div className="skill" style={{ width: `${percent}%` }}>
        <b>{percent}%</b>
      </div>
    </div>
  </div>
  )
}
export default Databases
