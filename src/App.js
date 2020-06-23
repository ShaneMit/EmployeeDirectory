import React, { Component } from 'react'
import EmployeeInfo from './components/EmployeeInfo'

const employeeData = [
  {
    "first_name": "Rik",
    "last_name": "Rassmann",
    "email": "rrassmann0@hc360.com",
    "department": "Human Resources"
  },
  {
    "first_name": "Nikolos",
    "last_name": "Rickson",
    "email": "nrickson1@senate.gov",
    "department": "Human Resources"
  },
  {
    "first_name": "Paige",
    "last_name": "MacNeilly",
    "email": "pmacneilly2@fda.gov",
    "department": "Business Development"
  },
  {
    "first_name": "Julee",
    "last_name": "Coronas",
    "email": "jcoronas3@bing.com",
    "department": "Training"
  },
  {
    "first_name": "Joelynn",
    "last_name": "Jamblin",
    "email": "jjamblin4@joomla.org",
    "department": "Legal"
  },
  {
    "first_name": "Shanta",
    "last_name": "Wadlow",
    "email": "swadlow5@zdnet.com",
    "department": "Sales"
  },
  {
    "first_name": "Estella",
    "last_name": "Braunle",
    "email": "ebraunle6@time.com",
    "department": "Services"
  },
  {
    "first_name": "Farlay",
    "last_name": "Tremolieres",
    "email": "ftremolieres7@webs.com",
    "department": "Training"
  },
  {
    "first_name": "Marla",
    "last_name": "Dykins",
    "email": "mdykins8@sbwire.com",
    "department": "Accounting"
  },
  {
    "first_name": "Kristy",
    "last_name": "De Blasio",
    "email": "kdeblasio9@ask.com",
    "department": "Business Development"
  }
]


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',

    }
  }

  onChangeHandler = e => {
    this.setState({input: e.target.value})
    console.log(e.target.value)
  }

  render() {
    return (
      <>
      <label htmlFor="search">Search</label>
      <input type="text" onChange={this.onChangeHandler}/>
      <div style={{display: 'flex', flexWrap:'wrap', padding: '20px'}}>
        {employeeData.map(employee => {
          return <EmployeeInfo firstName={employee.first_name} lastName={employee.last_name} department={employee.department} email={employee.email} />
        })}
      </div>
      </>
    )
  }
}



export default App
