import React from 'react'

const EmployeeInfo = (props) => {
  return (
    <>
      <div className="card text-white bg-secondary mb-3" style={{maxWidth: '18rem', margin: '10px'}}>
        <h5 className="card-header">{props.firstName} {props.lastName}</h5>
        <div className="card-body">
          <p className="card-title">{props.department}</p>
          <p className="card-text">{props.email}</p>
        </div>
      </div>
    </>
  )
}

export default EmployeeInfo