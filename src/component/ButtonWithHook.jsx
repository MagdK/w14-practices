import React, { useEffect, useState } from 'react'

function ButtonWithHook() {
    const [key1, setKey1] = useState("Thiiis is the default of a function component")
    const [key2, setKey2] = useState(0)
/*     const [key3, setKey3] = useState("This is not a drill!") */
    const [countries, setCountries] = useState([]);

    

    useEffect(
        () => {
                console.log("render")
                fetch('https://restcountries.com/v3.1/all')
                    .then(res => res.json())
                    .then(countriesData => setCountries(countriesData))
            },
            []
        )

    return (
        <div>
            {key1}
            <button onClick={ () => setKey1("Function component clicked.")}>Click me!</button>

            <button onClick={() => setKey2("1")}>{key2}</button>

            <div className='countries'>
                {countries.map( (country, index) => <div key={index}>{country.name.common}</div> )}
            </div>
        </div>
  )
}

export default ButtonWithHook;

/*
Mivel itt nincs render, onmagat futtatja le a react ujra es ujra. 

state valtozas dolog nem lett tul szep, majd jott egy valtozas, a  HOOK - nagy kerdes: mit egyszerusitett le es mit nehezitett meg?

Elso dolog, szintaktikailag osszessegeben ez egy sokkal egyszerubb es letisztultabb  dolog, nem kell konstuktor, nem kell 15 darab mindenfele mas dolgot betenni. 

Hogyan is nez ki egy ilyen fetcheles? Mik a zsakutcai? 
Ujrafuttatja, amikor rendereli  a dolgot. 

useState ket elem hosszasug tombbel ter vissza - elso az alapertelmezett amit mogotte az egyenloseg mogott adunk meg neki. Ez a z alapertelmezett erteke. Lenyeg az, hogy a countries egyenlo a default ertekkel. 

Ebbe betoltjuk a fetch tartalmat, ezen mappelunk
*/