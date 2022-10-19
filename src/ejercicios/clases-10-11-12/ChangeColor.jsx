import React, { useState } from 'react';



const ChangeColor = () => {

    
    //definiendo colores aleatorios
    let rojo = Math.floor(Math.random() * 255);
    let verde = Math.floor(Math.random() * 255);
    let azul = Math.floor(Math.random() * 255);


    //se define el color principal
    const colorPrincipal = {
        backgroundColor: `#000`,
    }

    //definir intervaloa de colores
    let colorInterval = {
        backgroundColor: `rgba(${rojo}, ${verde}, ${azul})`,
}


    //definimos el color inical del estado
    const [state, setstate] = useState(true);

    




    return (
        <div className='cuadrado-clase10' style={colorInterval} ></div>
    );
}

export default ChangeColor;
