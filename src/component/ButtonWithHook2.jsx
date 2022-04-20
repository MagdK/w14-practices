import React, { useState } from 'react'

function ButtonWithHook2() {
    const [key1, setKey1] = useState("Practice after session")

  return (
    <div>
        {key1}
        <button onClick={ () => setKey1("Will I remember any of this?")}>Dare to click!</button>
    </div>
  )
}
export default ButtonWithHook2;
