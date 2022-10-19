import React, { useState } from 'react';



const ChangeColor = () => {


    //definimos el color inical del estado y el color inicial
    const [color, setColor] = useState('#000');

    //estado para manejar el cambio de color en interval
    const [onMouseOver, setOnMouseOver] = useState(0);



    //definiendo colores aleatorios
    let rojo = Math.floor(Math.random() * 255);
    let verde = Math.floor(Math.random() * 255);
    let azul = Math.floor(Math.random() * 255);


    //funcion que actualiza el estado del color
    const generarColorAleatorio = () => {
        return setColor(`rgba(${rojo}, ${verde}, ${azul})`);
    }

    //función para cambiar el color en onMouseOver
    const cambiarColor = () => {
        return setOnMouseOver( setInterval(generarColorAleatorio(), 5) );
    }

    //funcion para detener el cambio de colores
    const detenerCambioColores = () => {
        return clearInterval(onMouseOver)
    }

    //funcion para detener en el color del interval actual
    const detenerColorInterval = () => {
        return  clearInterval(onMouseOver)
    }


    return (
        <div className='cuadrado-clase10' 
        onMouseOver={cambiarColor}
        onMouseLeave={detenerCambioColores}
        onDoubleClick={detenerColorInterval}
        style={ {backgroundColor: color} }></div>
    );
}

export default ChangeColor;
