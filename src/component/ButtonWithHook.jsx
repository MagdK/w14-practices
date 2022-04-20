import React, { useState } from 'react'

function ButtonWithHook() {
    const [key1, setKey1] = useState("Thiiis is the default of a function component")
    const [key2, setKey2] = useState(0)
    const [key3, setKey3] = useState("This is not a drill!")

    // const onClick = () => {
    //     setKey1("Function component clicked!")
    // }

    return (
        <div>
            {key1}
            {/* <button onClick={onClick}>Click me!</button> */}
            <button onClick={ () => setKey1("Function component clicked.")}>Click me now! F</button>

            <button onClick={() => setKey2("1")}>{key2}</button>
            <button onClick={() => setKey3("Not a drill!!!")}>{key3}</button>
        </div>
  )
}

export default ButtonWithHook;