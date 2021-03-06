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
  },
  {
    "first_name": "Tonya",
    "last_name": "Boniface",
    "email": "tboniface0@sfgate.com",
    "department": "Accounting"
  }, {
    "first_name": "Stanislaw",
    "last_name": "Milstead",
    "email": "smilstead1@ning.com",
    "department": "Services"
  }, {
    "first_name": "Carlina",
    "last_name": "Steggals",
    "email": "csteggals2@php.net",
    "department": "Accounting"
  }, {
    "first_name": "Kennedy",
    "last_name": "Winkworth",
    "email": "kwinkworth3@discovery.com",
    "department": "Services"
  }, {
    "first_name": "Cathlene",
    "last_name": "Bannell",
    "email": "cbannell4@engadget.com",
    "department": "Sales"
  }, {
    "first_name": "Xaviera",
    "last_name": "Kondratenya",
    "email": "xkondratenya5@acquirethisname.com",
    "department": "Research and Development"
  }, {
    "first_name": "Dacey",
    "last_name": "Ezzell",
    "email": "dezzell6@blogs.com",
    "department": "Marketing"
  }, {
    "first_name": "Rebekkah",
    "last_name": "Shawcroft",
    "email": "rshawcroft7@dion.ne.jp",
    "department": "Product Management"
  }, {
    "first_name": "Andres",
    "last_name": "Boobyer",
    "email": "aboobyer8@disqus.com",
    "department": "Human Resources"
  }, {
    "first_name": "Randee",
    "last_name": "Newby",
    "email": "rnewby9@chron.com",
    "department": "Human Resources"
  }, {
    "first_name": "Cleavland",
    "last_name": "Ceschi",
    "email": "cceschia@xinhuanet.com",
    "department": "Accounting"
  }, {
    "first_name": "Park",
    "last_name": "Tredwell",
    "email": "ptredwellb@samsung.com",
    "department": "Human Resources"
  }, {
    "first_name": "Micheal",
    "last_name": "Sponton",
    "email": "mspontonc@europa.eu",
    "department": "Research and Development"
  }, {
    "first_name": "Tova",
    "last_name": "Illwell",
    "email": "tillwelld@jalbum.net",
    "department": "Research and Development"
  }, {
    "first_name": "Zebulen",
    "last_name": "Grattage",
    "email": "zgrattagee@gravatar.com",
    "department": "Support"
  }, {
    "first_name": "Annabal",
    "last_name": "Emmatt",
    "email": "aemmattf@livejournal.com",
    "department": "Support"
  }, {
    "first_name": "Euell",
    "last_name": "Steers",
    "email": "esteersg@blogspot.com",
    "department": "Sales"
  }, {
    "first_name": "Caressa",
    "last_name": "Strasse",
    "email": "cstrasseh@goo.gl",
    "department": "Research and Development"
  }, {
    "first_name": "Juliann",
    "last_name": "Wenden",
    "email": "jwendeni@whitehouse.gov",
    "department": "Research and Development"
  }, {
    "first_name": "Carroll",
    "last_name": "Duesbury",
    "email": "cduesburyj@timesonline.co.uk",
    "department": "Services"
  }
]


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      filteredEmployees: []
    }
  }

  onChangeHandler = e => {

    console.log(e.target.value)
    const newFilteredEmployees = employeeData.filter(employee => {
      return employee.first_name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log(newFilteredEmployees)
    
    this.setState({ input: e.target.value, filteredEmployees: newFilteredEmployees })
  }

  render() {
    let finalEmployees
    if (this.state.filteredEmployees.length > 0) {
      finalEmployees = this.state.filteredEmployees
    } else {
      finalEmployees = employeeData
    }
    return (
      <>
      <h1>Employee Directory</h1>
      <br/>
      <label htmlFor="search">Search Name </label>
      <input type="text" onChange={this.onChangeHandler}/>
      <div style={{display: 'flex', flexWrap:'wrap', padding: '20px'}}>
          {finalEmployees.map(employee => {
          return <EmployeeInfo firstName={employee.first_name} lastName={employee.last_name} department={employee.department} email={employee.email} />
        })}
      </div>
      </>
    )
  }
}



export default App
