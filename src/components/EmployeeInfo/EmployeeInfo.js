import React from 'react'

const EmployeeInfo = (props) => {
  return (
    <>
      <div className="card text-white bg-secondary mb-3" style={{maxWidth: '18rem', margin: '10px'}}>
        <div className="card-header">{props.firstName} {props.lastName}</div>
        <div className="card-body">
          <h5 className="card-title">{props.department}</h5>
          <p className="card-text">{props.email}</p>
        </div>
      </div>
    </>
  )
}

export default EmployeeInfo