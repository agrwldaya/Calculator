
import { useState } from "react"
import style from "./App.module.css"
import Buttons from "./components/Buttons"
import Display from "./components/Display"
function App() {
  const[calval,setCalval]= useState("");
  // const handleOnchage =(e)=>{
  //   setCalval(e.target.value);
  // }
  const handleOnclick =(btntext)=>{
    if(btntext=='C'){
        setCalval("");
    }else if(btntext === '='){
           const result = eval(calval);
           setCalval(result)
    }else if(btntext=='clr'){
         const newcal = calval.slice(0,-1);
         setCalval(newcal)
    }
    else{
      const newval = calval+btntext;
      setCalval(newval)
    }
     
  }
  return (
    <center>
  <div className={style.calculator}>
        <h2>CALCULATOR</h2>
          <Display calval={calval}/>

         <Buttons handleOnclick={handleOnclick}/>
  </div>
  </center>
  )
}

export default App
