import React from 'react'
import { useState, useEffect,useRef } from 'react'


function UseRef() {
  let count = useRef(0)
  let inputRef_1 = useRef()
  let inputRef_2 = useRef()
  let inputRef_3 = useRef()
  let [name,setName]=useState("")
  useEffect(()=>{
    console.log(count)
      ++count.current
    
  })

  useEffect(()=>{
    inputRef_1.current.focus()
  },[])
  return<>
  <h1>useRef</h1>
  <h4>Example_1</h4>
  <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
  <div>Rendering in {count.current} times!</div>
<br></br>
<h4>Example_2</h4>
<h6>Enter OTP</h6>
<div>
  <input type="text" ref={inputRef_1} onChange={()=>inputRef_2.current.focus()}/>
  <input type="text" ref={inputRef_2} onChange={()=>inputRef_3.current.focus()} onKeyUp={(e)=>{
    if(e.key==="Backspace"){
      if(inputRef_2.current.value==""){
        inputRef_1.current.focus()
      }
    }
    }}/>

  <input type="text" ref={inputRef_3} onKeyUp={(e)=>{
    if(e.key==="Backspace"){
      if(inputRef_3.current.value==""){
        inputRef_2.current.focus()
      }
    }
    }} />
  </div>
<br></br>
{/* <div>
  <a href="#"  style={{width:"auto", height:"auto", textDecoration:"none",padding:"5px",borderRadius:"3px",backgroundColor:"lightblue"}} onClick={()=>inputRef.current.focus()}>Focus Me</a>
</div> */}

  </>
  
}

export default UseRef