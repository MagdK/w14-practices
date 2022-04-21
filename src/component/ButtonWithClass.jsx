import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "This is the default of a class component",
            key2: 0,
            title: {
                main: "main title",
                sub: "sub title"
            },
            countries: []
        }
        console.log("1");
    }

    componentDidMount() {
        console.log("3");
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => this.setState(
            () => {
                return {countries: countries}
            },
            () => console.log(this.state)
        ))
    }

    render() {
        console.log("2");
        return (
            <div>
                <>
                {this.state.key1}
                <button onClick={() => this.setState({key1: "Class component clicked!"})}>Click mee! C</button>

               <button onClick={() => this.setState({key2: "1"})}>{this.state.key2}</button>

               {/*  erdekesseg */}
                {/* <button onClick={() => {
                    this.state.key2 = 1
                    console.log(this.state)
                }}>{this.state.key2}</button> */}

                {/* <button onClick={() => {
                    this.setState({title: {
                        main: "h1",
                        sub: "string"
                        }
                    })
                    console.log(this.state);
                }}>{this.state.title.main}</button> */}

                <button onClick={() => {
                    this.setState(
                        () => {
                            return {title: {
                                main: "h1",
                                sub: "string"
                                }
                            }
                        },
                        () => {
                            console.log(this.state)
                        }
                    )
                }}>{this.state.title.main}</button>
                </>
                <div className='countries'>
                    {this.state.countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
                </div>
            </div>
        );
    }
}

export default ButtonWithClass;

/* 
Mi ez a super()??? Ha a construct() mar ott van miert kell a super? 
Ez a class-os constructor super syntactice sokkal reactesebb, mint a hook of function. A classoknal ez a szintaktika, ahogy extendelunk egy komponenst, kisebb atalakitasokkal mukodne. 

A hook-ok nagyon komplex mukodest csinalnak, ernek el.
Super is nativ js dolog, ami nem csinal mast, mint amikor extendelunk egy classt egy masik classal - ezzel tudjuk behivni az o konstructorat. 

Nem szabad elfelejteni leirni. 


---

const obj1 = {}
const obj2 = obj1
uj ibjektum eseten renderel ujra a react - olyan modon kezeli az allapotvaltozast, hogy magat az objektumot ossze probalja mergelni az eredeti objektummal

!!!
setState - ASYNC method - nem akkor es ott fog meghivodni, amikor szeretnek. Ez egy olyan metodus, hogy akkor hivodik meg amikor o ezt jonak latja. Nem egeszen, de kbra . Hiaba hivjuk meg, nem akkor for lefutni. 

Erdekesseg ismet: ha objektet replacelunk stringgel, kiurul a dolog
<button onClick={() => this.setState({title: "title"})}>{this.state.title.main}</button>

Itt a gomb szovege "main title", viszont mivel string-gel iruk felul, uresse valik. 

JS nel mindig 
1. a  construktor metodus fut le
2. aztan metodusok (reactnel construktor alapjan a render)
3. aztan meg a lifecycle metodusok


Component did mount nem futott le megegyszer
*/