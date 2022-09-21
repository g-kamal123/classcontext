import React, { useState } from 'react'

function Utility() {
    // const textContent = useRef()
    const [input,setInput]= useState('')
    const [word,setWord]= useState(0)
    const [char,setChar]= useState(0)
    const inputHandler =(event)=>{
        let arr =event.target.value.split(' ')
        arr = arr.filter((item)=>{
            if(item!=' ')
            return item
        })
        setWord(arr.length)
        setInput(prev=>event.target.value)
        setChar(event.target.value.length)
    }
    const uppercaseHandler =()=>{
        // let text=textContent.current.value
        // console.log(input)
        setInput(input.toUpperCase())
    }
    const lowercaseHandler =()=>{
        setInput(input.toLowerCase())
    }
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        <h1>4.</h1>
        {/* <span>Text Area</span> */}
        <textarea style={{width:'12rem',fontSize:'1.2rem'}} value={input} onChange={inputHandler}></textarea>
        <div>
        <button onClick={uppercaseHandler}>UpperCase</button>
        <button onClick={lowercaseHandler}>LowerCase</button>
        </div>
        <div>
            <span>Summary</span>
            <p>{word} words and {char} characters</p>
        </div>
    </div>
  )
}

export default Utility