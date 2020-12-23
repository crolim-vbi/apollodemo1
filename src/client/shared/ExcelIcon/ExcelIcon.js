import React from 'react';
import ExcelIconImg from "./excelIcon.png"

const ExcelIcon = () => {
    return(
        <div style={{height: "24px", width: "24px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={ExcelIconImg} style={{height: "20px"}}  />
        </div>
    )
}

export default ExcelIcon