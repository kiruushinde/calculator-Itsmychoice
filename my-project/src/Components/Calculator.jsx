import React, { useState } from 'react'

function Calculator() {

    const [digit, setDigit] = useState("");

    const afterClick = (e) => {
        // console.log(e.target.value);
        // this will allow the keyboard input 😍😎
        setDigit(e.target.value);
    }

    const handleDigit = (e) => {
        let val = digit.concat(e.target.name);
        // setDigit(digit.concat(e.target.name));
        setDigit(val);
    };

    const handleAC = () => {
        setDigit(" ");
    };

    const calculate = () => {
        try {
            setDigit(eval(digit));
        }
        catch (err) {
            setDigit("Error");
        }
    };

    return (
        <div>
            <h1 class='text-white text-center font-medium text-3xl mt-24 underline'>Calculator : Compute Like Computer 👩‍💻</h1>
            <div class="container mt-8 outline outline-white w-[490px] h-80 bg-white m-auto rounded-md shadow-lg transform hover:-translate-y-2">
                <div class="">

                    <input onChange={afterClick} type="text" value={digit} placeholder="calculate here.." class="outline outline-slate-200 w-[345px] mx-16 my-4 absolute h-10 rounded-sm flex justify-end p-2" />

                    <div class="grid grid-cols-4 grid-rows-5 p-16 gap-4 pb-4 text-center relative">
                        <button name='(' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>(</button>
                        <button name=')' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg " onClick={handleDigit}>)</button>
                        <button name='%' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg " onClick={handleDigit}>%</button>
                        <button name='AC' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg " onClick={handleAC}>AC</button>
                        <button name='7' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg " onClick={handleDigit}>7</button>
                        <button name='8' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>8</button>
                        <button name='9' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>9</button>
                        <button name='/' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>/</button>
                        <button name='4' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>4</button>
                        <button name='5' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>5</button>
                        <button name='6' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>6</button>
                        <button name='*' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>*</button>
                        <button name='1' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>1</button>
                        <button name='2' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>2</button>
                        <button name='3' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>3</button>
                        <button name='-' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>-</button>
                        <button name='0' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>0</button>
                        <button name='.' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>.</button>
                        <button name='' class="h-8 w-16 cursor-pointer bg-cyan-400 text-white rounded-lg" onClick={calculate}>=</button>
                        <button name='+' class="h-8 w-16 cursor-pointer bg-yellow-400 rounded-lg" onClick={handleDigit}>+</button>
                    </div>
                </div>
            </div>


            <img src="./boy2.png" alt="React Image" class='animate-bounce hover:animate-none -mt-40 w-[320px] ml-52' />
            <div class="bg-[#c6effb] -mt-[9px] text-black w-full text-center font-medium">
                www.kiranscalculator.com All copy &copy; rights are reserved
            </div>
        </div>
    )
}

export default Calculator