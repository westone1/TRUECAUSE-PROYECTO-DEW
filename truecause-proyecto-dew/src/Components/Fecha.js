import React from "react";

function Fecha(){
    const date = new Date()
    let año = date.getFullYear()
    return(
        <>
            <span className="año">{año}</span>
        </>

    )

}
export default Fecha