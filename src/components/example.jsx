// export default function Home() {
//   let name = "John";
//   return (
//     <>
//       <div>
//         Hello {name}. You are 20 years old.
//       </div>
//       <p>This is a paragraph</p>
//     </>
//   );
// }


// import { useState } from "react";
// export default function Home() {
//     const[score,setScore] = useState(0);

//     const increment = () => {
//         setScore((prev) => prev+1)
//     };

//     const dec = () => {
//         setScore((prev) => prev-1)
//     };
//     return(
//         <>
//         <p>{score}</p>
//         <button onClick={increment}>Increment Score</button>
//          <button onClick={dec}>Decrement Score</button>
//         </>
//     )
// }


// import { useState } from "react";
// export default function Home({age}){
//      return (age<18)?<h1>Welcome</h1>:<h1>Not allowed</h1>
// }



// export default function Home() {
// const handleClick = () => {
//     alert("Hello");
// };

// const handleSubmit = (name) => {
//     alert('Hello ${name}');
// }

// return(
//     <>
//    <h2>Hello World</h2>
//    <button  onClick={handleClick}>Click</button>
//    <button onClick={() => handleSubmit("Hema")}>Submit</button>
//    </>
// );
// }


// export default function Home({ age }) {
//   const handleClick = () => {
//     alert("Hello");
//   };
//   const handleSubmit = (name) => {
//     alert(`Hello ${name}`);
//   };
//   return (
//     <>
//       <h2>Hello World</h2>
//       <button onClick={handleClick}>Click</button>
//       <button onClick={() => handleSubmit("John")}>Submit</button>
//     </>
//   );
// }