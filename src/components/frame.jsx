import React from 'react'

 const Frame = ({name,percent,icon}) => {
  return (
    <div className="Frameworks">
    <div className="framework-item">
      <h3> <i className={icon}></i> {name}</h3>
      <div className="skilss-data">
        <div className="skill" style={{ width: `${percent}%` }}>
          <b>{percent}%</b>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Frame
