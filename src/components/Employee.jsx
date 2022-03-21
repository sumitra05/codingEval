import React from 'react'

export const Employee = () => {
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [role, setRole] = React.useState("");
    const [salary, setSalary] = React.useState("");
    const [employee, setEmployee] = React.useState([]);
  
    React.useEffect(() => {
      getData();
    }, []);
  
    const getData = () => {
      fetch(`http://localhost:3001/Employee`)
        .then((res) => res.json())
        .then((res) => setEmployee(res));
    };
    
    

    const handleAdd = () =>{

        const payload = {
            name: name,
            gender: gender,
            department: department,
            role: role,
            salary: salary,
            status: false,
        }

        const payloadjson = JSON.stringify(payload);

        fetch('http://localhost:3001/Employee',{
            method: "POST",
            body: payloadjson,
            headers: {
                "content-type": "application/json"
            }
        }).then((res) => {
           getData();
        })
    }
  return (
    <div>
        <h1>Employee Dashboard</h1>
        <input type="text" placeholder='Name'  onChange={(e) => setName(e.target.value)}/> <br/>
        <input type="text" placeholder='Department'  onChange={(e) => setDepartment(e.target.value)}/><br/>
        <input type="text" placeholder='Gender'  onChange={(e) => setGender(e.target.value)}/> <br/>
        <input type="text" placeholder='Role'  onChange={(e) => setRole(e.target.value)}/> <br/>
        <input type="text" placeholder='Salary'  onChange={(e) => setSalary(e.target.value)}/> <br/>
        <button onClick={handleAdd}>Add Employee</button> <hr/>

        <button>Show All Department</button>
        <button>Show Marketing</button>
        <button>Show HR</button>
        <button>Show IT</button>
        <button>Show Finance</button>

        <br />
        <br />
        <button>Sort By Salary Ascending</button>
        <button>Sort by Salary Descending</button>

        {employee.map((item) => {
            return (
            <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.gender}</div>
                <div>{item.department}</div>
                <div>{item.role}</div>
                <div>{item.salary}</div>
                <br />
                
            </div>
            );
      })}
    </div>
  );
};
    
