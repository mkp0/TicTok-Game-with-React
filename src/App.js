import React,{useState,useEffect} from 'react'

export default function App() {

  let [arr,setArr]= useState(["","","","","","","","","",""]);
  let [count,setCount] = useState(0)
  let [winner , setWinner] = useState('')


  let style = {
     height : "6rem",
     maxWidth:"10rem",
     border:"1px solid black",
     display:"flex",
     justifyContent:"Center",
     alignItems:"center",
     fontSize:"2rem",
     fontWeight : "700",
     backgroundColor:"#ffd740"
    }

    const func = (ind) => {
      if(count%2===0 && arr[ind]==='')
      {
        arr[ind] = 'x';
        setCount(count+1)
      }
      else if(count%2===1 && arr[ind]==='')
      {
        arr[ind] = '0';
        setCount(count+1)
      }
    }
    
    useEffect(() => {
      if (
        (arr[0] === "x" && arr[3] === "x" && arr[6] === "x") ||
        (arr[0] === "0" && arr[3] === "0" && arr[6] === "0")
      ) {
        if (arr[0] === "x") setWinner("x");
        else setWinner("0");
        window.alert("Game Over winner :  " + winner)
      } else if (
        (arr[1] === "x" && arr[4] === "x" && arr[7] === "x") ||
        (arr[1] === "0" && arr[4] === "0" && arr[7] === "0")
      ) {
        if (arr[1] === "x") setWinner("x");
        else setWinner("0");
        window.alert("Game Over winner :  " + winner)
      } else if (
        (arr[2] === "x" && arr[5] === "x" && arr[8] === "x") ||
        (arr[2] === "0" && arr[5] === "0" && arr[8] === "0")
      ) {
        if (arr[2] === "x") setWinner("x");
        else setWinner("0");
        window.alert("Game Over winner :  " + winner)
      } else if (
        (arr[0] === "x" && arr[1] === "x" && arr[2] === "x") ||
        (arr[0] === "0" && arr[1] === "0" && arr[2] === "0")
      ) {
        if (arr[0] === "x") setWinner("x");
        else setWinner("0");
        window.alert("Game Over winner :  " + winner)
      } else if (
        (arr[3] === "x" && arr[4] === "x" && arr[5] === "x") ||
        (arr[3] === "0" && arr[4] === "0" && arr[5] === "0")
      ) {
        if (arr[3] === "x") setWinner("x");
        else setWinner("0");
        window.alert("Game Over winner :  " + winner)
      } else if (
        (arr[6] === "x" && arr[7] === "x" && arr[8] === "x") ||
        (arr[6] === "0" && arr[7] === "0" && arr[8] === "0")
      ) {
        if (arr[6] === "x") setWinner("x");
        else setWinner("0");
        window.alert("Game Over winner :  " + winner)
      } else if (
        (arr[0] === "x" && arr[4] === "x" && arr[8] === "x") ||
        (arr[0] === "0" && arr[4] === "0" && arr[8] === "0")
      ) {
        if (arr[0] === "x") setWinner("x");
        else setWinner("0");
        window.alert("Game Over winner :  " + winner)
      } else if (
        (arr[2] === "x" && arr[4] === "x" && arr[6] === "x") ||
        (arr[2] === "0" && arr[4] === "0" && arr[6] === "0")
      ) {
        if (arr[2] === "x") setWinner("x");
        else setWinner("0");
        window.alert("Game Over winner :  " + winner)
      }
      else if(count>=9)
      {
        window.alert("Game Over winner :  " + winner)
        setWinner("Draw")
      }
    });

    let func1 = () => {
      setArr(["","","","","","","","","",""])
      setCount(0)
      setWinner("")
    }
  

  return (
    <div  id="top">
    <h4>Winner :  {winner}</h4>
    <button className="btn" onClick={func1} >Restart</button>
    <div className="card-panel pink darken-2" id="box" >
      <div style={style} onClick={()=>{func(0)}} >{arr[0]}</div>
      <div style={style} onClick={()=>{func(1)}} >{arr[1]}</div>
      <div style={style} onClick={()=>{func(2)}} >{arr[2]}</div>
      <div style={style} onClick={()=>{func(3)}} >{arr[3]}</div>
      <div style={style} onClick={()=>{func(4)}} >{arr[4]}</div>
      <div style={style} onClick={()=>{func(5)}} >{arr[5]}</div>
      <div style={style} onClick={()=>{func(6)}} >{arr[6]}</div>
      <div style={style} onClick={()=>{func(7)}} >{arr[7]}</div>
      <div style={style} onClick={()=>{func(8)}} >{arr[8]}</div>
    </div>
    
    </div>
  )
}


/*


*/