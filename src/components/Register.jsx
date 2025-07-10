// import { use, useRef, useState } from "react";
// import "./Register.css";

// export default function Register() {

//     const Firstname = useRef();
//     const Lastname = useRef();
//     const Email = useRef();
//     const password = useRef();

//     // const[user,setUser] = useState( );
//     const handleSubmit= () => {
//         const user = {
//             Firstname: Firstname.current.value,
//             Lastname: Lastname.current.value,
//             Email: Email.current.value,
//             password: password.current.value
//         };
//         console.log(user);
//     };


//     return(
//         <div className="App-Register-Row">
//         <div>
//         <h2>Registration Form</h2>
//         <p>
//             <label>First name: </label>
//              </p>
//             <input type="text"
//             // onChange={(e) => setUser({...user,Firstname: e.target.value})}
//             ref={Firstname}
//             placeholder="Enter First name"/>
//         <p>
//             <label>Last name:</label>
//          </p>
//             <input 
//             type="text"
//             ref={Lastname}
//             // onChange={(e) => setUser({...user,Lastname:e.target.value})}
//             placeholder="Enter Last name"/>
//         <p>
//             <label>Email: </label>
//          </p>
//             <input 
//             type="text" 
//             ref={Email}
//             // onChange={(e) => setUser({...user,email:e.target.value})}
//             placeholder="Enter your Email"/>
//         <p>
//             <label>Password: </label>
//          </p>
//             <input 
//             type="password"
//             ref={password}
//             // onChange={(e) => setUser({...user,password:e.target.value})}
//             placeholder="Enter your password"/>
//        <p><button onClick={handleSubmit}>Submit</button></p>
//         </div>
//         </div>
//     )
// }


import "./Register.css";
// import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const handleSubmit = async () => {
    try {
    //   const url = "http://localhost:8080/api/users/register";
    const url = "https://mernbackend-tau.vercel.app/api/users/register"
      const result = await axios.post(url, user);
      setError("Data saved successfully");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
    <div className="App-Register-Row">
      <div style={{ backgroundColor: "white" }}>
        <h2>Registration Form</h2>
        {error}
        <p>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            placeholder="Enter First Name"
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter Email Address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
      </div>
    </div>
  );
}
