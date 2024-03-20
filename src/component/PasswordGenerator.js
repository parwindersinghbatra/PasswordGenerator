import React, { useState } from 'react'
import './PasswordGenerator.css'

const PasswordGenerator = () => {
const [password, setPassword] = useState("")
const [passwordLength, setPasswordLength] = useState(12)
const [symbol, setSymbol] = useState(false)
const [isNumber, setIsNumber] = useState(false)
const [isLowerCase, setLowerCase] = useState(false)
const [isUpperCase, setUpperCase] = useState(false)


    const generatePasswords = () =>{
        let charset = "";
        let newPassword = "";



        if(symbol) charset += "!@#$%^&*()"
        if(isNumber) charset += "123456789"
        if(isLowerCase) charset += "abcdefghijklmnopqrstuvwxyz"
        if(isUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        for (let i = 0; i < passwordLength; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }
 
        setPassword(newPassword);

        console.log(newPassword)
    }

  return (
    <div className= 'container'>
        <h2
                style={{
                    color: "green",
                    textAlign: "center",
                }}
            >
                Random Password Generator
            </h2>

        <div className='inputContainerStyle'>
        <label className='labelStyle'>Password Length:</label>
        <input
            type="number"
            min="8"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            className='inputStyle'
        />
        </div>
        {/* to add symbols */}

        <div className='checkboxContainerStyle'>
            <label> 
                <input 
                    type='checkbox'
                    value={symbol}
                    onChange={(e) =>{
                        setSymbol(!symbol);
                    }}
                />
            Symbols</label>
            
            {/* to add Numbers */} 
            <label>
                <input 
                    type='checkbox'
                    value={isNumber}
                    onChange={(e) =>{
                        setIsNumber(!isNumber);
                    }}
                />
                Number</label>


              {/* to add LowerCse */}
                <label>
                    <input 
                        type='checkbox'
                        value={isLowerCase}
                        onChange={(e) =>{
                            setLowerCase(!isLowerCase);
                        }}
                    />
                LowerCase</label>
 {/* to add upperCase */}
                <label>
                    <input 
                        type='checkbox'
                        value={isUpperCase}
                        onChange={(e) =>{
                            setUpperCase(!isUpperCase);
                        }}
                    />
                UpperCase</label>

        </div>
       
        <button
        onClick={generatePasswords}
        className='buttonStyle'
        >Generator Password</button>

        <div>
            Password Generated : {password}
        </div>
    </div>
  )
}

export default PasswordGenerator
