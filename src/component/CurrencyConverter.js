import React, { useRef, useState } from 'react'

function CurrencyConverter() {
    const fromSelect = useRef()
    const toSelect = useRef()
    const [input,setInput]= useState(0)
    const [exchange,setExchange] = useState('')

    const inputHandler =(event)=>{
        if(isNaN(event.target.value)){
            alert('please enter numerical value')
            return
        }
        setInput(()=> event.target.value)
    }
    const exchangeHandler=()=>{
        let from = fromSelect.current.value
        let to = toSelect.current.value
        if(from==='Usd' && to==='Ind')
        setExchange(preExchange => 'Rs.'+(Number(input)*80).toFixed(2))
        else
        if(from==='Ind' && to==='Usd')
        setExchange(preExchange => '$'+(Number(input)/80).toFixed(2))
        else alert('select correct options')
        return
    }
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        <h1>3. Currency Converter</h1>
        <div>
            <span>Enter Amount:</span>
            <input style={{fontSize:'1.2rem'}} onChange={inputHandler} value={input}/>
        </div>
        <div>
            <select ref={fromSelect}>
                <option>From</option>
                <option value='Usd'>USA</option>
                <option value='Ind'>IND</option>
            </select>
            <select ref={toSelect}>
                <option>To</option>
                <option value='Usd'>USA</option>
                <option value='Ind'>IND</option>
            </select>
            <h2>{exchange}</h2>
        </div>
        <button onClick={exchangeHandler} style={{width:'fit-content',fontSize:'1.2rem'}}>Get Exchange</button>
    </div>
  )
}

export default CurrencyConverter