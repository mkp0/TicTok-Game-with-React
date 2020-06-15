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

      if(count<0)
      {
        arr[ind] = ''
      }
      else if(count%2===0 && arr[ind]==='')
      {
        arr[ind] = 'X';
        setCount(count+1)
      }
      else if(count%2===1 && arr[ind]==='')
      {
        arr[ind] = 'O';
        setCount(count+1)
      }
    }
    
    useEffect(() => {
      if (
        (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") ||
        (arr[0] === "O" && arr[3] === "O" && arr[6] === "O")
      ) {
        if (arr[0] === "X") setWinner("X");
        else setWinner("O");
        setCount(-1)
      } else if (
        (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") ||
        (arr[1] === "O" && arr[4] === "O" && arr[7] === "O")
      ) {
        if (arr[1] === "X") setWinner("X");
        else setWinner("O");
        setCount(-1)
      } else if (
        (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") ||
        (arr[2] === "O" && arr[5] === "O" && arr[8] === "O")
      ) {
        if (arr[2] === "X") setWinner("X");
        else setWinner("O");
        setCount(-1)
      } else if (
        (arr[0] === "X" && arr[1] === "X" && arr[2] === "X") ||
        (arr[0] === "O" && arr[1] === "O" && arr[2] === "O")
      ) {
        if (arr[0] === "X") setWinner("X");
        else setWinner("O");
        setCount(-1)
      } else if (
        (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") ||
        (arr[3] === "O" && arr[4] === "O" && arr[5] === "O")
      ) {
        if (arr[3] === "X") setWinner("X");
        else setWinner("O");
        setCount(-1)
      } else if (
        (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") ||
        (arr[6] === "O" && arr[7] === "O" && arr[8] === "O")
      ) {
        if (arr[6] === "X") setWinner("X");
        else setWinner("0");
        setCount(-1)
      } else if (
        (arr[0] === "X" && arr[4] === "X" && arr[8] === "X") ||
        (arr[0] === "O" && arr[4] === "O" && arr[8] === "O")
      ) {
        if (arr[0] === "X") setWinner("X");
        else setWinner("O");
        setCount(-1)
      } else if (
        (arr[2] === "X" && arr[4] === "X" && arr[6] === "X") ||
        (arr[2] === "O" && arr[4] === "O" && arr[6] === "O")
      ) {
        if (arr[2] === "X") setWinner("X");
        else setWinner("O");
        setCount(-1)
      }
      else if(count>=9)
      {
        setWinner("Draw")
      }
    },[setWinner,arr,count,setCount,setArr]);

    let func1 = () => {
      setArr(["","","","","","","","","",""])
      setCount(0)
      setWinner("")
    }
  

  return (
    <div  id="top">
    <h4 className="card-panel hoverable  red lighten-4" style={{minWidth:"15rem",borderRadius:"1rem"}}  >WINNER :  {winner}</h4>
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