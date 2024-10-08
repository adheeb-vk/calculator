"use client"
import { error } from 'console';
import { parse } from 'path';
import { stringify } from 'querystring';
import React, { use, useEffect, useState } from 'react'

function Calculator() {

const numbers = ["1","2","3","+","4","5","6","-","7","8","9","/","C","0","CE"]

const [value, setValue] = useState("")

// useEffect(()=>{
//     console.log(value)
// }, [value])

const handleClick = (val : any) => {
    if (val === 'C') {
        setValue('');
    } else if ( val === 'CE') {
        // if(){
        try{
        setValue(value.slice(0, -1));
        }catch(error){
            setValue("")
        }
        // }
    } else {
        setValue(value + val);
    }
};

  return (
    <div className='w-[24%] p-2'>
      <div className='text-center mb-4 text-2xl'>{value === "" ? "Calculator" : value}</div>
      <div className='bg-black'>
        <ul className='flex items-center gap-3 w-full flex-wrap'>
            {numbers.map((number, index)=>{
            return(
                <li className='w-[20%]' key={index}>
                    <button onClick={()=>{
                        handleClick(number)
                        // console.log()
                    }} className={`w-full ${number === "+" ? "bg-green-500 py-6 font-bold text-black" : number === "-" ? "bg-green-500 py-6 font-bold text-black" : number === "/" ? "bg-green-500 py-6 font-bold text-black" : number === "C" ? "bg-red-500 py-6 font-bold text-white" : "bg-yellow-600 py-6 font-bold text-black"}`}>{number}</button>
                </li>
            )
            })}
            <li className='w-[20%] text-center'>
                <button className='text-center bg-orange-600 py-6 w-full' onClick={()=>{
                    try {
                        if(value !== ""){
                            setValue(eval(value));
                        }
                    } catch (error) {
                        setValue('Error');
                    }
                }}>=</button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Calculator
