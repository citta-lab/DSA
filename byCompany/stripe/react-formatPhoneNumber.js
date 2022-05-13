

/** 
 * Refer Video Here : https://www.youtube.com/watch?v=MqJzsDC1N0U&t=126s
 * Question: (123)456-7890aftertypingthethirdnumberitwillautomaticallyadd 
 * Sandbox: https://codesandbox.io/s/phone-number-formatter-app-fvqhor
 */

import React, { useState } from 'react';
import "./styles.css";


export default function App() {

  const [phoneNumber, setPhoneNumber] = useState(null);

  const handleOnChange = function (event){
    let value = event.target.value; 
    let number = formatPhoneNumer(value);
    setPhoneNumber(number); 
  }

  return (
    <div className="App">
      <label> Phone Number : </label>
      <input 
        type='text' 
        name='phoneNumber' 
        onChange={(e) => handleOnChange(e)}
        value={phoneNumber}/>
    </div>
  );
}

const formatPhoneNumer = (data) => {

  if(!data.length) return null;

  let num = data.replace(/[^\d]/g, ''); 

  // strictly look for 10 numbers 
  if(num.length < 10 || num.length > 10) return null;

  let first = num.slice(0, 3);
  let second = num.slice(3, 6);
  let third = num.slice(6);

  return `(${first}) ${second}-${third}`;
}
