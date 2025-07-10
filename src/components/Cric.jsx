import { useState } from "react";
export default function Cric(){
    const[run,setRun] = useState(0);
    const[wic,setWic] = useState(0);
    const[message,setMessage] = useState();

    const incrun= ()=> {
        if(wic<10)
        {
            setRun((prev) => prev+1)
            setMessage("Well done")
        }
    };

    const inwic = () => {
        if(wic<11)
        {
            setWic(wic+1);
            setMessage("Good luck nxt time");
        }
        else
        {
            setMessage("Game over");
        }
    }

    return(
        <>
        <h2>{run}</h2>
        <button onClick={incrun}> Run</button>
        <h2>{wic}</h2>
        <button onClick={inwic}>Wicket</button>
        <hr/>
        {message}
        </>
    )
} 