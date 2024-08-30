"use client"
import React, { use, useEffect, useState } from 'react'

function Calculator() {

const numbers = ["1","2","3","+","4","5","6","-","7","8","9","/","C","0","CE","*"]

const [value, setValue] = useState("")

useEffect(()=>{
    console.log(value)
}, [value])

const handleClick = (val : any) => {
    if(value === "Error" || value === "0" || value === "Infinity"){
        if(val === "C" || val === "CE"){
                    setValue("")
        }else{
            setValue(val)
        }
    }else{
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
    }
    // if(value !== 'Error'){
    //     if(value !== '0'){
    //         if (val === 'C') {
    //             setValue('');
    //         } else if ( val === 'CE') {
    //             // if(){
    //             try{
    //             setValue(value.slice(0, -1));
    //             }catch(error){
    //                 setValue("")
    //             }
    //             // }
    //         } else {
    //             setValue(value + val);
    //         }
    //     }else{
    //         if(val === "C" || val === "CE"){
    //             setValue("")
    //         }else{
    //             setValue(val)
    //         }
    //     }
    // }else{
    //     if(val === "C" || val === "CE"){
    //         setValue("")
    //     }else{
    //         setValue(val)
    //     }
    // }
};

  return (
    <div className='w-[24%] p-2 max-[1180px]:w-[30%] max-[970px]:w-[32%] max-[860px]:w-[36%] max-[780px]:w-[38%] bg-[#191919] max-[710px]:w-[40%] max-[640px]:w-[50%] max-[540px]:w-[60%] max-[460px]:w-[70%] max-[380px]:w-[80%] max-[360px]:w-full'>
      <div className='text-center mb-2 bg-black py-4 text-2xl rounded-md text-black font-bold bg-[#f0f0f0]'>{value === "" ? "Calculator" : value}</div>
      <div className='bg-black py-2'>
        <ul className='flex items-center justify-center gap-3 w-full flex-wrap'>
            {numbers.map((number, index)=>{
            return(
                <li className='w-[20%] rounded-lg overflow-hidden' key={index}>
                    <button onClick={()=>{
                        handleClick(number)
                        // console.log()
                    }} className={`w-full ${number === "*" ? "bg-green-300 py-6 max-[360px]:py-4 font-bold text-black" : number === "+" ? "bg-green-300 py-6 max-[360px]:py-5 font-bold text-black" : number === "-" ? "bg-green-300 py-6 max-[360px]:py-5 font-bold text-black" : number === "/" ? "bg-green-300 py-6 max-[360px]:py-5 font-bold text-black" : number === "C" ? "bg-red-500 py-6 max-[360px]:py-5 font-bold text-white" : "bg-yellow-100 py-6 max-[360px]:py-5 font-bold text-black"}`}>{number}</button>
                </li>
            )
            })}
            <li className='w-[92%] text-center w-[20%] rounded-lg overflow-hidden'>
                <button className='text-center bg-green-900 py-6 w-full' onClick={()=>{
                    try {
                        if(value !== ""){
                            setValue(String(eval(value)));
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
