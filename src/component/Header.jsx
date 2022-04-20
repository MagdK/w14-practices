import React from 'react'

function Header({to}) {

    // const toHeader = "This is the end of the header" // ezt a sort most vigyuk at az index.js-be
    return <div>Header {to}</div>

    // az alabbi sor ugyanazt csinalja, mint a felettebb levo, ez tortenik a motorhazteto alatt amugy, ezze alakul at
    //return React.createElement("div", null, `Header`)

    // illesszuk be a toHeader valtozot ebbe a sorba is: 
    // return React.createElement("div", null, `Header ${to}`)
}

export default Header;