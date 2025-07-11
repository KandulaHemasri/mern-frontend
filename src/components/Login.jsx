import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/login`;
      const result = await axios.post(url, user);
      setError("Welcome");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
    <div>
      
      <h2>Login</h2>
      {error}
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <Link to="/register">Create Account</Link>
    </div>
  );
}

// import React, { useState } from "react";

// const Login = () => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: ""
//   });

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//     setFormData({ fullName: "", email: "", password: "" });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignUp) {
//       console.log("Signing up:", formData);
//       alert(`Signed up as ${formData.fullName}`);
//     } else {
//       console.log("Logging in:", formData);
//       alert(`Logged in as ${formData.email}`);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>{isSignUp ? "Create Account" : "Sign In"}</h2>
//       <form onSubmit={handleSubmit}>
//         {isSignUp && (
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         )}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         <button type="submit" style={styles.button}>
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </button>
//       </form>
//       <p style={styles.toggleText}>
//         {isSignUp ? "Already have an account?" : "Don't have an account?"}
//         <span onClick={toggleForm} style={styles.toggleLink}>
//           {isSignUp ? " Sign In" : " Create New Account"}
//         </span>
//       </p>
//     </div>
//   );
// };

// // Inline CSS Styles
// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "100px auto",
//     padding: "30px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     margin: "8px 0",
//     borderRadius: "5px",
//     border: "1px solid #ccc"
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     marginTop: "10px"
//   },
//   toggleText: {
//     marginTop: "15px",
//     fontSize: "14px"
//   },
//   toggleLink: {
//     color: "#007bff",
//     cursor: "pointer",
//     textDecoration: "underline",
//     marginLeft: "5px"
//   }
// };

// export default Login;
